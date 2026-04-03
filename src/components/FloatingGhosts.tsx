import { useMemo } from "react";

const FloatingGhosts = () => {
  const ghosts = useMemo(() =>
    Array.from({ length: 4 }, (_, i) => ({
      left: `${15 + Math.random() * 70}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${12 + Math.random() * 8}s`,
      size: 18 + Math.random() * 20,
      opacity: 0.02 + Math.random() * 0.03,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden hidden md:block">
      {ghosts.map((g, i) => (
        <svg
          key={i}
          viewBox="0 0 64 64"
          fill="currentColor"
          className="absolute text-primary animate-ghost-drift"
          style={{
            left: g.left,
            bottom: "-40px",
            width: g.size,
            height: g.size,
            opacity: g.opacity,
            animationDelay: g.delay,
            animationDuration: g.duration,
          }}
        >
          <path d="M32 4C19.85 4 10 13.85 10 26v26c0 2 1 3 2 2l6-4 6 4 6-4 6 4 6-4 6 4c1 1 2 0 2-2V26C54 13.85 44.15 4 32 4zm-8 28a4 4 0 110-8 4 4 0 010 8zm16 0a4 4 0 110-8 4 4 0 010 8z" />
        </svg>
      ))}
    </div>
  );
};

export default FloatingGhosts;
