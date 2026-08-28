export default function FpgaVisual({ className = "" }: { className?: string }) {
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

        {/* Main signal flow — horizontal */}
        <text x="28" y="72" fill="#9ca3af" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.05em">
          CLK
        </text>
        <line x1="56" y1="68" x2="96" y2="68" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="96,68 90,64 90,72" fill="#c8c4bc" />

        <rect x="96" y="48" width="88" height="40" rx="3" stroke="#d1cdc4" strokeWidth="1" fill="#ffffff" />
        <text x="140" y="73" fill="#6b7280" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">
          CLK_DIV
        </text>

        <line x1="184" y1="68" x2="224" y2="68" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="224,68 218,64 218,72" fill="#c8c4bc" />

        <rect x="224" y="48" width="72" height="40" rx="3" stroke="#2c3e5a" strokeWidth="1.5" fill="#ffffff" />
        <text x="260" y="73" fill="#2c3e5a" fontSize="11" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="600">
          FSM
        </text>

        <line x1="296" y1="68" x2="336" y2="68" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="336,68 330,64 330,72" fill="#c8c4bc" />

        <rect x="336" y="48" width="100" height="40" rx="3" stroke="#d1cdc4" strokeWidth="1" fill="#ffffff" />
        <text x="386" y="66" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">
          SYNC_COUNTER
        </text>
        <text x="386" y="80" fill="#9ca3af" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">
          [15:0]
        </text>

        <line x1="386" y1="88" x2="386" y2="120" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="386,120 382,114 390,114" fill="#c8c4bc" />

        <rect x="326" y="120" width="120" height="40" rx="3" stroke="#d1cdc4" strokeWidth="1" fill="#ffffff" />
        <text x="386" y="138" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">
          SEG_DECODER
        </text>
        <text x="386" y="152" fill="#9ca3af" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">
          BCD → 7-SEG
        </text>

        {/* Button → Debounce → FSM */}
        <text x="28" y="148" fill="#9ca3af" fontSize="10" fontFamily="ui-monospace, monospace">
          BTN
        </text>
        <line x1="56" y1="144" x2="96" y2="144" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="96,144 90,140 90,148" fill="#c8c4bc" />

        <rect x="96" y="124" width="80" height="40" rx="3" stroke="#d1cdc4" strokeWidth="1" fill="#ffffff" />
        <text x="136" y="149" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">
          DEBOUNCE
        </text>

        <line x1="176" y1="144" x2="224" y2="88" stroke="#c8c4bc" strokeWidth="1" strokeDasharray="4 3" />
        <polygon points="224,88 220,94 226,92" fill="#c8c4bc" />

        {/* RST → FSM */}
        <text x="28" y="100" fill="#9ca3af" fontSize="10" fontFamily="ui-monospace, monospace">
          RST
        </text>
        <line x1="56" y1="96" x2="224" y2="72" stroke="#c8c4bc" strokeWidth="1" strokeDasharray="4 3" />
        <polygon points="224,72 220,78 226,76" fill="#c8c4bc" />

        {/* FSM states */}
        <rect x="224" y="200" width="72" height="56" rx="3" stroke="#e4e2de" strokeWidth="1" fill="#ffffff" />
        <text x="260" y="220" fill="#9ca3af" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">
          STATES
        </text>
        <text x="260" y="234" fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">
          IDLE
        </text>
        <text x="260" y="246" fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">
          RUN · STOP
        </text>

        <line x1="260" y1="88" x2="260" y2="200" stroke="#e4e2de" strokeWidth="1" strokeDasharray="3 3" />

        {/* 7-segment display */}
        <g transform="translate(140, 240)">
          <rect x="0" y="0" width="240" height="80" rx="4" stroke="#e4e2de" strokeWidth="1" fill="#ffffff" />
          <rect x="50" y="14" width="72" height="5" rx="1.5" fill="#141414" />
          <rect x="118" y="19" width="5" height="28" rx="1.5" fill="#141414" />
          <rect x="118" y="51" width="5" height="28" rx="1.5" fill="#141414" />
          <rect x="50" y="68" width="72" height="5" rx="1.5" fill="#d1cdc4" />
          <rect x="44" y="51" width="5" height="28" rx="1.5" fill="#d1cdc4" />
          <rect x="44" y="19" width="5" height="28" rx="1.5" fill="#141414" />
          <rect x="50" y="40" width="72" height="5" rx="1.5" fill="#d1cdc4" />
          <text x="148" y="48" fill="#9ca3af" fontSize="9" fontFamily="ui-monospace, monospace">
            7-SEG OUT
          </text>
        </g>

        <line x1="386" y1="160" x2="386" y2="240" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="386,240 382,234 390,234" fill="#c8c4bc" />

        <text x="28" y="360" fill="#c8c4bc" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.04em">
          RTL BLOCK DIAGRAM — ILLUSTRATIVE
        </text>
      </svg>
    </div>
  );
}
