export default function FifoVisual({ className = "" }: { className?: string }) {
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

        {/* Domain separator */}
        <line
          x1="260"
          y1="48"
          x2="260"
          y2="338"
          stroke="#e4e2de"
          strokeWidth="1"
          strokeDasharray="5 4"
        />

        <text
          x="92"
          y="36"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.06em"
        >
          WRITE CLOCK DOMAIN
        </text>
        <text
          x="428"
          y="36"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.06em"
        >
          READ CLOCK DOMAIN
        </text>

        <text
          x="24"
          y="56"
          fill="#9ca3af"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.05em"
        >
          wr_clk
        </text>
        <text
          x="496"
          y="56"
          fill="#9ca3af"
          fontSize="10"
          textAnchor="end"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.05em"
        >
          rd_clk
        </text>

        {/* Write-domain blocks */}
        <rect
          x="24"
          y="70"
          width="108"
          height="30"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="78"
          y="89"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          WRITE DATA
        </text>

        <rect
          x="24"
          y="112"
          width="108"
          height="34"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="78"
          y="133"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          WRITE CONTROL
        </text>

        <rect
          x="24"
          y="168"
          width="108"
          height="36"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="78"
          y="184"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          BIN WR PTR
        </text>
        <text
          x="78"
          y="197"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          BINARY
        </text>

        <rect
          x="24"
          y="214"
          width="108"
          height="32"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="78"
          y="234"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          BIN → GRAY
        </text>

        <rect
          x="24"
          y="258"
          width="108"
          height="40"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="78"
          y="275"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          2-FF SYNC
        </text>
        <text
          x="78"
          y="288"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          RD PTR IN
        </text>

        <rect
          x="24"
          y="310"
          width="72"
          height="28"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="60"
          y="328"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          FULL
        </text>

        {/* Dual-port memory */}
        <rect
          x="186"
          y="100"
          width="148"
          height="58"
          rx="3"
          stroke="#2c3e5a"
          strokeWidth="1.5"
          fill="#ffffff"
        />
        <text
          x="260"
          y="124"
          fill="#2c3e5a"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontWeight="600"
        >
          DUAL-PORT
        </text>
        <text
          x="260"
          y="140"
          fill="#2c3e5a"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontWeight="600"
        >
          FIFO MEMORY
        </text>

        {/* Read-domain blocks */}
        <rect
          x="388"
          y="70"
          width="108"
          height="30"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="442"
          y="89"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          READ DATA
        </text>

        <rect
          x="388"
          y="112"
          width="108"
          height="34"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="442"
          y="133"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          READ CONTROL
        </text>

        <rect
          x="388"
          y="168"
          width="108"
          height="36"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="442"
          y="184"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          BIN RD PTR
        </text>
        <text
          x="442"
          y="197"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          BINARY
        </text>

        <rect
          x="388"
          y="214"
          width="108"
          height="32"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="442"
          y="234"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          BIN → GRAY
        </text>

        <rect
          x="388"
          y="258"
          width="108"
          height="40"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="442"
          y="275"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          2-FF SYNC
        </text>
        <text
          x="442"
          y="288"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          WR PTR IN
        </text>

        <rect
          x="424"
          y="310"
          width="72"
          height="28"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="460"
          y="328"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          EMPTY
        </text>

        {/* Write data / control into memory */}
        <line x1="132" y1="85" x2="186" y2="118" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="186,118 179,114 180,121" fill="#c8c4bc" />

        <line x1="132" y1="129" x2="186" y2="129" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="186,129 180,125 180,133" fill="#c8c4bc" />

        {/* Memory out to read side */}
        <line x1="334" y1="118" x2="388" y2="85" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="388,85 381,86 384,92" fill="#c8c4bc" />

        <line x1="334" y1="129" x2="388" y2="129" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="388,129 382,125 382,133" fill="#c8c4bc" />

        {/* Local pointer chains */}
        <line x1="78" y1="146" x2="78" y2="168" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="78,168 74,162 82,162" fill="#c8c4bc" />
        <line x1="78" y1="204" x2="78" y2="214" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="78,214 74,208 82,208" fill="#c8c4bc" />
        <line x1="78" y1="298" x2="60" y2="310" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="60,310 62,304 67,308" fill="#c8c4bc" />

        <line x1="442" y1="146" x2="442" y2="168" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="442,168 438,162 446,162" fill="#c8c4bc" />
        <line x1="442" y1="204" x2="442" y2="214" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="442,214 438,208 446,208" fill="#c8c4bc" />
        <line x1="442" y1="298" x2="460" y2="310" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="460,310 453,308 458,304" fill="#c8c4bc" />

        {/* Gray write pointer → read-domain 2-FF */}
        <line
          x1="132"
          y1="230"
          x2="388"
          y2="268"
          stroke="#c8c4bc"
          strokeWidth="1"
          strokeDasharray="4 3"
        />
        <polygon points="388,268 381,266 383,273" fill="#c8c4bc" />

        {/* Gray read pointer → write-domain 2-FF */}
        <line
          x1="388"
          y1="230"
          x2="132"
          y2="268"
          stroke="#c8c4bc"
          strokeWidth="1"
          strokeDasharray="4 3"
        />
        <polygon points="132,268 139,266 137,273" fill="#c8c4bc" />

        <text
          x="28"
          y="360"
          fill="#c8c4bc"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.04em"
        >
          ASYNC FIFO / CDC — ILLUSTRATIVE
        </text>
      </svg>
    </div>
  );
}
