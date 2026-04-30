import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import './ProfileCard.css';

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  ENTER_TRANSITION_MS: 180,
};

const clamp = (v: number, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v: number, p = 3) => parseFloat(v.toFixed(p));
const adjust = (v: number, fMin: number, fMax: number, tMin: number, tMax: number) =>
  round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

interface ProfileCardProps {
  avatarUrl?: string;
  iconUrl?: string;
  innerGradient?: string;
  behindGlowColor?: string;
  behindGlowSize?: string;
  className?: string;
  enableTilt?: boolean;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = '',
  iconUrl = '',
  innerGradient,
  behindGlowColor,
  behindGlowSize,
  className = '',
  enableTilt = true,
  miniAvatarUrl,
  name = 'Trinken Customer',
  title = 'Pure Hydration Lover',
  handle = 'trinkenug',
  status = 'Online',
  contactText = 'Contact',
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const enterTimerRef = useRef<number | null>(null);
  const leaveRafRef = useRef<number | null>(null);

  const tiltEngine = useMemo(() => {
    if (!enableTilt) return null;
    let rafId: number | null = null;
    let running = false;
    let lastTs = 0;
    let currentX = 0, currentY = 0, targetX = 0, targetY = 0;
    const DEFAULT_TAU = 0.14;
    const INITIAL_TAU = 0.6;
    let initialUntil = 0;

    const setVarsFromXY = (x: number, y: number) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;
      const w = shell.clientWidth || 1;
      const h = shell.clientHeight || 1;
      const px = clamp((100 / w) * x);
      const py = clamp((100 / h) * y);
      const cx = px - 50;
      const cy = py - 50;
      const props: Record<string, string> = {
        '--pointer-x': `${px}%`,
        '--pointer-y': `${py}%`,
        '--background-x': `${adjust(px, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(py, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(py - 50, px - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${py / 100}`,
        '--pointer-from-left': `${px / 100}`,
        '--rotate-x': `${round(-(cx / 5))}deg`,
        '--rotate-y': `${round(cy / 4)}deg`,
      };
      for (const [k, v] of Object.entries(props)) wrap.style.setProperty(k, v);
    };

    const step = (ts: number) => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);
      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;
      setVarsFromXY(currentX, currentY);
      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;
      if (stillFar) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x: number, y: number) {
        currentX = x; currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x: number, y: number) {
        targetX = x; targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs: number) {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent() {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      },
    };
  }, [enableTilt]);

  const getOffsets = (evt: PointerEvent, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  const handlePointerMove = useCallback((event: PointerEvent) => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;
    const { x, y } = getOffsets(event, shell);
    tiltEngine.setTarget(x, y);
  }, [tiltEngine]);

  const handlePointerEnter = useCallback((event: PointerEvent) => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;
    shell.classList.add('active');
    shell.classList.add('entering');
    if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
    enterTimerRef.current = window.setTimeout(() => {
      shell.classList.remove('entering');
    }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);
    const { x, y } = getOffsets(event, shell);
    tiltEngine.setTarget(x, y);
  }, [tiltEngine]);

  const handlePointerLeave = useCallback(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;
    tiltEngine.toCenter();
    const checkSettle = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;
      if (settled) {
        shell.classList.remove('active');
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle);
      }
    };
    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    leaveRafRef.current = requestAnimationFrame(checkSettle);
  }, [tiltEngine]);

  useEffect(() => {
    if (!enableTilt || !tiltEngine) return;
    const shell = shellRef.current;
    if (!shell) return;
    shell.addEventListener('pointerenter', handlePointerEnter as EventListener);
    shell.addEventListener('pointermove', handlePointerMove as EventListener);
    shell.addEventListener('pointerleave', handlePointerLeave as EventListener);
    const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);
    return () => {
      shell.removeEventListener('pointerenter', handlePointerEnter as EventListener);
      shell.removeEventListener('pointermove', handlePointerMove as EventListener);
      shell.removeEventListener('pointerleave', handlePointerLeave as EventListener);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      tiltEngine.cancel();
      shell.classList.remove('entering');
    };
  }, [enableTilt, tiltEngine, handlePointerMove, handlePointerEnter, handlePointerLeave]);

  const cardStyle = useMemo(() => ({
    '--icon': iconUrl ? `url(${iconUrl})` : 'none',
    '--inner-gradient': innerGradient ?? 'linear-gradient(145deg, hsl(200 95% 45% / 0.55) 0%, hsl(190 100% 70% / 0.35) 100%)',
    '--behind-glow-color': behindGlowColor ?? 'hsl(200 100% 65% / 0.55)',
    '--behind-glow-size': behindGlowSize ?? '55%',
  } as React.CSSProperties), [iconUrl, innerGradient, behindGlowColor, behindGlowSize]);

  const handleContactClick = useCallback(() => onContactClick?.(), [onContactClick]);

  return (
    <div ref={wrapRef} className={`pc-card-wrapper ${className}`} style={cardStyle}>
      <div className="pc-behind-glow" />
      <div ref={shellRef} className="pc-card-shell">
        <div className="pc-card-inner">
          <div className="pc-card-icon" />
          {avatarUrl && (
            <img
              className="pc-card-avatar"
              src={avatarUrl}
              alt={name}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          )}
          <div className="pc-card-shine" />
          <div className="pc-card-content">
            <div className="pc-card-header">
              <h3 className="pc-card-name">{name}</h3>
              <p className="pc-card-title">{title}</p>
            </div>
            {showUserInfo && (
              <div className="pc-card-userinfo">
                <img
                  className="pc-card-mini-avatar"
                  src={miniAvatarUrl || avatarUrl}
                  alt={handle}
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.style.opacity = '0.5';
                    if (avatarUrl) t.src = avatarUrl;
                  }}
                />
                <div className="pc-card-userinfo-text">
                  <div className="pc-card-handle">@{handle}</div>
                  <div className="pc-card-status">{status}</div>
                </div>
                <button className="pc-card-contact-btn" onClick={handleContactClick}>
                  {contactText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfileCardComponent);
