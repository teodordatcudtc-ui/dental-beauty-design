interface LogoProps {
  className?: string;
  dark?: boolean;
}

export default function Logo({ className = "w-10 h-10", dark = false }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="grad-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9C27B0" />
          <stop offset="100%" stopColor="#D4317A" />
        </linearGradient>
        <linearGradient id="grad-bottom" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E91E8C" />
          <stop offset="100%" stopColor="#C2185B" />
        </linearGradient>
        <linearGradient id="grad-text" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9C27B0" />
          <stop offset="100%" stopColor="#E91E8C" />
        </linearGradient>
      </defs>

      {/* Upper diamond half - purple */}
      <path
        d="M50 2 L96 44 L50 58 L4 44 Z"
        fill="url(#grad-top)"
      />

      {/* Lower diamond half - left tooth */}
      <path
        d="M4 44 L50 58 L50 98 L26 112 L8 80 Z"
        fill="url(#grad-bottom)"
      />

      {/* Lower diamond half - right tooth */}
      <path
        d="M96 44 L50 58 L50 98 L74 112 L92 80 Z"
        fill="url(#grad-bottom)"
        opacity="0.9"
      />

      {/* Center divider line (tooth gap) */}
      <line
        x1="50"
        y1="58"
        x2="50"
        y2="100"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Highlight on upper facet */}
      <path
        d="M50 2 L70 30 L50 36 L30 30 Z"
        fill="white"
        opacity="0.15"
      />

      {/* Small circle accent */}
      <circle cx="50" cy="44" r="4" fill="white" opacity="0.3" />
    </svg>
  );
}
