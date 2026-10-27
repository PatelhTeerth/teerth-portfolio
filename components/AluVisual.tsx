export default function AluVisual({ className = "" }: { className?: string }) {
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
          16-BIT RISC ALU
        </text>

        <text
          x="48"
          y="56"
          fill="#9ca3af"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          A[15:0]
        </text>
        <text
          x="140"
          y="56"
          fill="#9ca3af"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          B[15:0]
        </text>
        <text
          x="248"
          y="56"
          fill="#9ca3af"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          CODE[4:0]
        </text>
        <text
          x="392"
          y="56"
          fill="#9ca3af"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          CIN
        </text>

        <rect
          x="196"
          y="70"
          width="128"
          height="36"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="260"
          y="86"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          OPCODE DECODE
        </text>
        <text
          x="260"
          y="99"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          ONE-HOT SELECT
        </text>

        <line x1="288" y1="56" x2="260" y2="70" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="260,70 256,64 264,64" fill="#c8c4bc" />

        {/* Kogge-Stone adder — highlighted */}
        <rect
          x="28"
          y="136"
          width="176"
          height="112"
          rx="3"
          stroke="#2c3e5a"
          strokeWidth="1.5"
          fill="#ffffff"
        />
        <text
          x="116"
          y="158"
          fill="#2c3e5a"
          fontSize="10"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontWeight="600"
        >
          KOGGE-STONE ADDER
        </text>
        <text
          x="116"
          y="174"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          PARALLEL-PREFIX · 16-BIT
        </text>

        <rect
          x="44"
          y="188"
          width="64"
          height="24"
          rx="2"
          stroke="#e4e2de"
          strokeWidth="1"
          fill="#f5f4f2"
        />
        <text
          x="76"
          y="204"
          fill="#6b7280"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          PG / BSEL
        </text>
        <rect
          x="124"
          y="188"
          width="64"
          height="24"
          rx="2"
          stroke="#e4e2de"
          strokeWidth="1"
          fill="#f5f4f2"
        />
        <text
          x="156"
          y="204"
          fill="#6b7280"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          PREFIX
        </text>
        <text
          x="116"
          y="232"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          ADD · SUB · INC · DEC
        </text>

        <line x1="76" y1="56" x2="76" y2="136" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="76,136 72,130 80,130" fill="#c8c4bc" />
        <line x1="164" y1="56" x2="140" y2="136" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="140,136 135,131 144,132" fill="#c8c4bc" />
        <line x1="404" y1="56" x2="180" y2="136" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="180,136 176,130 184,132" fill="#c8c4bc" />

        {/* Side units */}
        <rect
          x="228"
          y="136"
          width="120"
          height="36"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="288"
          y="158"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          LOGIC UNIT
        </text>

        <rect
          x="228"
          y="184"
          width="120"
          height="36"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="288"
          y="200"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          BARREL SHIFTER
        </text>
        <text
          x="288"
          y="213"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          LOG · ARITH · ROT
        </text>

        <rect
          x="372"
          y="136"
          width="120"
          height="84"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="432"
          y="162"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          COMPARATOR
        </text>
        <text
          x="432"
          y="178"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          SIGNED A ? B
        </text>
        <text
          x="432"
          y="198"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          G / P TREE
        </text>

        <line x1="260" y1="106" x2="260" y2="136" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="260,136 256,130 264,130" fill="#c8c4bc" />
        <line x1="288" y1="106" x2="288" y2="136" stroke="#c8c4bc" strokeWidth="1" />
        <line x1="324" y1="88" x2="432" y2="136" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="432,136 425,134 428,141" fill="#c8c4bc" />

        {/* Output combine */}
        <rect
          x="156"
          y="276"
          width="208"
          height="40"
          rx="3"
          stroke="#d1cdc4"
          strokeWidth="1"
          fill="#ffffff"
        />
        <text
          x="260"
          y="294"
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          OUTPUT COMBINE
        </text>
        <text
          x="260"
          y="307"
          fill="#9ca3af"
          fontSize="8"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          C · VOUT · COUT
        </text>

        <line x1="116" y1="248" x2="200" y2="276" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="200,276 193,273 196,280" fill="#c8c4bc" />
        <line x1="288" y1="220" x2="260" y2="276" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="260,276 256,270 264,270" fill="#c8c4bc" />
        <line x1="432" y1="220" x2="320" y2="276" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="320,276 323,269 328,274" fill="#c8c4bc" />

        <text
          x="156"
          y="344"
          fill="#9ca3af"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          C[15:0]
        </text>
        <text
          x="248"
          y="344"
          fill="#9ca3af"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          VOUT
        </text>
        <text
          x="332"
          y="344"
          fill="#9ca3af"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          COUT
        </text>

        <line x1="220" y1="316" x2="188" y2="332" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="188,332 192,326 196,331" fill="#c8c4bc" />
        <line x1="260" y1="316" x2="268" y2="332" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="268,332 263,326 271,327" fill="#c8c4bc" />
        <line x1="300" y1="316" x2="348" y2="332" stroke="#c8c4bc" strokeWidth="1" />
        <polygon points="348,332 341,330 343,336" fill="#c8c4bc" />

        <text
          x="28"
          y="360"
          fill="#c8c4bc"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.04em"
        >
          GATE-LEVEL ALU — ILLUSTRATIVE
        </text>
      </svg>
    </div>
  );
}
