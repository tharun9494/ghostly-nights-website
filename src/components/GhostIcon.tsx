const GhostIcon = ({ className = "w-8 h-8", animated = false }: { className?: string; animated?: boolean }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={`${className} ${animated ? "animate-ghost-float" : ""}`}>
    <path d="M32 4C19.85 4 10 13.85 10 26v26c0 2 1 3 2 2l6-4 6 4 6-4 6 4 6-4 6 4c1 1 2 0 2-2V26C54 13.85 44.15 4 32 4zm-8 28a4 4 0 110-8 4 4 0 010 8zm16 0a4 4 0 110-8 4 4 0 010 8z" />
  </svg>
);

export default GhostIcon;
