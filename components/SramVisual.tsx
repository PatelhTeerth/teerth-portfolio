export default function SramVisual({ className = "" }: { className?: string }) {
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

        <text
          x="260"
          y="32"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.06em"
        >
          LATCH-BASED SRAM
        </text>

        <text
          x="116"
          y="54"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.05em"
        >
          1-BIT CELL
        </text>
        <text
          x="372"
          y="54"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.05em"
        >
          32×32 ARRAY MODEL
        </text>

        {/* Write port */}
        <text
          x="28"
          y="78"
          fill="#9ca3af"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          dc
        </text>
        <text
          x="28"
          y="98"
          fill="#9ca3af"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          sc
        </text>

        <rect
          x="64"
          y="64"
          width="104"
          height="40"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="116"
          y="80"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          WRITE PORT
        </text>
        <text
          x="116"
          y="94"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          nMOS + sc
        </text>

        {/* Cross-coupled latch */}
        <rect
          x="48"
          y="128"
          width="136"
          height="88"
          rx="3"
          stroke="#2c3e5a"
          strokeWidth="1.5"
          fill="#ffffff"
        />
        <text
          x="116"
          y="148"
          fill="#2c3e5a"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontWeight="600"
        >
          CROSS-COUPLED
        </text>
        <text
          x="116"
          y="162"
          fill="#2c3e5a"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontWeight="600"
        >
          INVERTERS
        </text>

        <rect
          x="60"
          y="174"
          width="48"
          height="26"
          rx="2"
          stroke="#e4e2de"
          strokeWidth="1"
          fill="#f5f4f2"
        />
        <text
          x="84"
          y="191"
          fill="#6b7280"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          INV
        </text>
        <rect
          x="124"
          y="174"
          width="48"
          height="26"
          rx="2"
          stroke="#e4e2de"
          strokeWidth="1"
          fill="#f5f4f2"
        />
        <text
          x="148"
          y="191"
          fill="#6b7280"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          INV
        </text>
        <line x1="108" y1="187" x2="124" y2="187" stroke="#c8c4bc" strokeWidth="1" />
        <line x1="84" y1="174" x2="148" y2="174" stroke="#c8c4bc" strokeWidth="1" strokeDasharray="3 3" />

        <line x1="116" y1="104" x2="116" y2="128" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="116,128 112,122 120,122" fill="#c8c4bc" />

        {/* Read ports */}
        <rect
          x="48"
          y="236"
          width="64"
          height="36"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="80"
          y="251"
          fill="#6b7280"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          READ A
        </text>
        <text
          x="80"
          y="264"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          sa → da
        </text>

        <rect
          x="120"
          y="236"
          width="64"
          height="36"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="152"
          y="251"
          fill="#6b7280"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          READ B
        </text>
        <text
          x="152"
          y="264"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          sb → db
        </text>

        <line x1="92" y1="216" x2="80" y2="236" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="80,236 78,229 85,232" fill="#c8c4bc" />
        <line x1="140" y1="216" x2="152" y2="236" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="152,236 145,232 147,228" fill="#c8c4bc" />

        <line
          x1="220"
          y1="48"
          x2="220"
          y2="338"
          stroke="#e4e2de"
          strokeWidth="1"
          strokeDasharray="5 4"
        />

        {/* Decoder + array */}
        <rect
          x="248"
          y="68"
          width="112"
          height="48"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="304"
          y="88"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          NOR DECODER
        </text>
        <text
          x="304"
          y="102"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          5-BIT ADDRESS
        </text>

        <text
          x="248"
          y="60"
          fill="#9ca3af"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          ADDR
        </text>

        <rect
          x="384"
          y="68"
          width="108"
          height="48"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="438"
          y="88"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          WORDLINE
        </text>
        <text
          x="438"
          y="102"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          RC π / T
        </text>

        <line x1="360" y1="92" x2="384" y2="92" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="384,92 378,88 378,96" fill="#c8c4bc" />

        <rect
          x="280"
          y="148"
          width="212"
          height="92"
          rx="3"
          stroke="#2c3e5a"
          strokeWidth="1.5"
          fill="#ffffff"
        />
        <text
          x="386"
          y="176"
          fill="#2c3e5a"
          fontSize="10"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontWeight="600"
        >
          32×32 MEMORY MODEL
        </text>
        <text
          x="386"
          y="194"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          WORST-CASE READ PATH
        </text>
        <text
          x="386"
          y="214"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          BITLINE RC + CELL
        </text>

        <line x1="438" y1="116" x2="386" y2="148" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="386,148 389,141 394,146" fill="#c8c4bc" />

        <rect
          x="320"
          y="264"
          width="132"
          height="40"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="386"
          y="281"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          BIT OUTPUT
        </text>
        <text
          x="386"
          y="294"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          ACCESS DELAY
        </text>

        <line x1="386" y1="240" x2="386" y2="264" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="386,264 382,258 390,258" fill="#c8c4bc" />

        <text
          x="28"
          y="360"
          fill="#c8c4bc"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.04em"
        >
          SRAM LAYOUT / ARRAY — ILLUSTRATIVE
        </text>
      </svg>
    </div>
  );
}
