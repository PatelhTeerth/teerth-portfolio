export default function NeurotechVisual({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full h-full min-h-[280px] sm:min-h-[360px] bg-[#f5f4f2] border border-border rounded-md overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 520 380"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="520" height="380" fill="#f5f4f2" />

        {/* BCI Input */}
        <rect x="210" y="36" width="100" height="40" rx="3" stroke="#d1cdc4" strokeWidth="1" fill="#ffffff" />
        <text x="260" y="54" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">
          BCI INPUT
        </text>
        <text x="260" y="67" fill="#9ca3af" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">
          INTERFACE
        </text>
        <line x1="260" y1="76" x2="260" y2="118" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="260,118 256,112 264,112" fill="#c8c4bc" />

        {/* Central controller */}
        <rect x="200" y="118" width="120" height="56" rx="3" stroke="#2c3e5a" strokeWidth="1.5" fill="#ffffff" />
        <text x="260" y="142" fill="#2c3e5a" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="600">
          EMBEDDED
        </text>
        <text x="260" y="156" fill="#2c3e5a" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="600">
          CONTROLLER
        </text>

        {/* Sensors — left */}
        {[
          { y: 60, label: "LiDAR" },
          { y: 130, label: "RGB" },
          { y: 200, label: "ULTRASONIC" },
        ].map(({ y, label }) => (
          <g key={label}>
            <rect x="48" y={y} width="88" height="36" rx="3" stroke="#d1cdc4" strokeWidth="1" fill="#ffffff" />
            <text x="92" y={y + 22} fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">
              {label}
            </text>
            <line x1="136" y1={y + 18} x2="200" y2="146" stroke="#c8c4bc" strokeWidth="1" />
            <polygon points={`200,146 196,140 202,142`} fill="#c8c4bc" />
          </g>
        ))}

        {/* Motor control — right */}
        <rect x="384" y="130" width="88" height="36" rx="3" stroke="#d1cdc4" strokeWidth="1" fill="#ffffff" />
        <text x="428" y="146" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">
          MOTOR
        </text>
        <text x="428" y="158" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">
          CONTROL
        </text>
        <line x1="320" y1="146" x2="384" y2="148" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="384,148 378,144 378,152" fill="#c8c4bc" />

        {/* Rover platform */}
        <rect x="160" y="250" width="200" height="56" rx="6" stroke="#e4e2de" strokeWidth="1" fill="#ffffff" strokeDasharray="5 4" />
        <text x="260" y="284" fill="#9ca3af" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">
          ROVER PLATFORM
        </text>
        <circle cx="190" cy="314" r="12" stroke="#d1cdc4" strokeWidth="1" fill="#f0eeeb" />
        <circle cx="330" cy="314" r="12" stroke="#d1cdc4" strokeWidth="1" fill="#f0eeeb" />

        <line x1="260" y1="174" x2="260" y2="250" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="260,250 256,244 264,244" fill="#c8c4bc" />

        <text x="28" y="360" fill="#c8c4bc" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.04em">
          SYSTEM ARCHITECTURE — ILLUSTRATIVE
        </text>
      </svg>
    </div>
  );
}
