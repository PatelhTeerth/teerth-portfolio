export interface ProjectPreview {
  slug: string;
  title: string;
  organization: string;
  description: string;
  technologies: string[];
  image?: string;
  visual?: "fpga" | "neurotech" | "fifo" | "alu" | "sram";
  reverse?: boolean;
  imageClassName?: string;
  aspectClass?: string;
  featured?: boolean;
}

export interface AtAGlanceItem {
  label: string;
  value: string;
}

export interface NarrativeImage {
  src: string;
  alt: string;
  caption: string;
  aspectClass?: string;
  imageClassName?: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  organization: string;
  introduction: string;
  heroImage?: string;
  heroCaption?: string;
  heroAspectClass?: string;
  heroImageClassName?: string;
  visual?: "fpga" | "neurotech" | "fifo" | "alu" | "sram";
  atAGlance: AtAGlanceItem[];
  overview: string;
  goal: string;
  role: string;
  implementation: string[];
  implementationImages?: NarrativeImage[];
  validation: string[];
  validationImages?: NarrativeImage[];
  technologies: string[];
  metaDescription: string;
  showFpgaBreakdown?: boolean;
}

export const projectPreviews: ProjectPreview[] = [
  {
    slug: "radar-stereo-vision",
    title: "Portable Radar + Stereo-Vision Platform",
    organization: "Rice University",
    description:
      "Integrated mmWave radar, stereo vision, embedded computing, vehicle control, and custom mechanical hardware into a synchronized mobile environmental data-collection platform.",
    technologies: [
      "Python",
      "Jetson Xavier NX",
      "Linux",
      "mmWave Radar",
      "ZED Stereo Vision",
      "GPIO",
      "PWM",
      "CAD",
      "Embedded Systems",
    ],
    image: "/images/rice-rover.png",
    aspectClass: "aspect-[4/3]",
    imageClassName: "object-cover object-top",
  },
  {
    slug: "mixed-signal-waveform",
    title: "Mixed-Signal Waveform Generation Hardware",
    organization: "Corveus Medical",
    description:
      "Designed and validated a mixed-signal waveform-generation system combining precision analog circuitry, digital SPI control, isolated power, PCB design, and software-controlled DAC operation.",
    technologies: [
      "KiCad",
      "PCB Design",
      "DAC8831",
      "SPI",
      "Python",
      "FTDI",
      "Analog Electronics",
      "Reflow Soldering",
      "Oscilloscope",
    ],
    image: "/images/corveus-pcb-render.png",
    reverse: true,
    aspectClass: "aspect-[4/3]",
    imageClassName: "object-contain p-6 sm:p-8 bg-[#f5f4f2]",
  },
  {
    slug: "vlsi-16bit-alu",
    title: "16-bit ALU & Kogge-Stone Adder",
    organization: "UT Austin · ECE 460R / ECE 382M",
    description:
      "Designed a 16-bit ALU around a Kogge-Stone parallel-prefix adder, integrating arithmetic, logic, compare, and shift units through a Cadence–Synopsys VLSI flow with schematic capture, functional simulation, static timing analysis, and automatic place-and-route.",
    technologies: [
      "Cadence Virtuoso",
      "NC Verilog",
      "Synopsys PrimeTime",
      "Cadence Innovus",
      "Kogge-Stone Adder",
      "Static Timing Analysis",
      "Place and Route",
      "VLSI",
    ],
    image: "/images/alu-layout.png",
    aspectClass: "aspect-[4/3]",
    imageClassName: "object-contain bg-black",
    visual: "alu",
  },
  {
    slug: "sram-layout-array",
    title: "SRAM Cell Layout & Array Delay Model",
    organization: "UT Austin · ECE 460R / ECE 382M",
    description:
      "Designed a latch-based SRAM cell through schematic, custom layout, DRC/LVS, and post-layout simulation, then modeled a 32×32 array with interconnect RC to measure worst-case memory access time.",
    technologies: [
      "Cadence Virtuoso",
      "Custom Layout",
      "Calibre DRC/LVS",
      "Spectre",
      "HSPICE",
      "SRAM",
      "RC Delay Modeling",
      "VLSI",
    ],
    image: "/images/sram-inverter-layout.png",
    aspectClass: "aspect-[4/3]",
    imageClassName: "object-contain bg-black",
    visual: "sram",
    reverse: true,
  },
  {
    slug: "asynchronous-fifo-cdc",
    title: "Asynchronous FIFO & CDC Verification",
    organization: "SystemVerilog / Vivado",
    description:
      "Designing a dual-clock asynchronous FIFO in SystemVerilog using Gray-coded read/write pointers and synchronized clock-domain crossings, with a self-checking verification environment for validating reliable data transfer between independent clock domains.",
    technologies: [
      "SystemVerilog",
      "RTL Design",
      "Asynchronous FIFO",
      "Clock-Domain Crossing",
      "Gray Code",
      "Assertions",
      "Functional Coverage",
      "Vivado",
    ],
    image: "/images/fifo-waveform.png",
    aspectClass: "aspect-[16/10]",
    imageClassName: "object-contain bg-black",
    visual: "fifo",
  },
  {
    slug: "fpga-stopwatch",
    title: "FPGA RTL Stopwatch",
    organization: "Xilinx Basys 3 / Artix-7 FPGA",
    description:
      "Designed a modular Verilog RTL architecture implementing finite-state control, synchronous timing logic, clock division, input conditioning, and seven-segment display control on an Artix-7 FPGA.",
    technologies: [
      "Verilog",
      "Vivado",
      "FPGA",
      "RTL",
      "FSM",
      "Digital Logic",
      "Artix-7",
    ],
    visual: "fpga",
    featured: false,
  },
  {
    slug: "neurotech",
    title: "Embedded Hardware Systems",
    organization: "Longhorn Neurotech",
    description:
      "Integrated sensing, embedded control, and motor-control subsystems for a robotics platform combining distributed sensors and real-time hardware/software interfaces.",
    technologies: [
      "Embedded Systems",
      "Robotics",
      "LiDAR",
      "Motor Control",
      "Sensors",
      "C++",
      "Python",
    ],
    visual: "neurotech",
    featured: false,
  },
];

export const projectDetails: Record<string, ProjectDetail> = {
  "radar-stereo-vision": {
    slug: "radar-stereo-vision",
    title: "Portable Radar + Stereo-Vision Platform",
    organization: "Rice University",
    introduction:
      "A mobile environmental data-collection platform integrating mmWave radar, stereo vision, embedded computing, and custom mechanical hardware into a synchronized field-deployable system.",
    heroImage: "/images/rice-rover.png",
    atAGlance: [
      {
        label: "Role",
        value: "Undergraduate Researcher, ECE",
      },
      {
        label: "Focus",
        value:
          "Sensor, embedded-computing, vehicle-control, and mechanical integration",
      },
      {
        label: "Result",
        value: "300+ synchronized frames validated",
      },
    ],
    overview:
      "This project required building a complete sensing and control platform—not just software, but mechanical design, sensor integration, embedded computing, electrical interfaces, power distribution, and real-world validation on a mobile RC vehicle.",
    goal: "Develop a portable platform capable of collecting synchronized radar and stereo-vision data in real-world environments, with integrated vehicle control for mobile data acquisition.",
    role: "Integrated the platform across mechanical, electrical, embedded, and software domains—designing mounting structures, integrating sensors with an NVIDIA Jetson Xavier NX, developing acquisition and vehicle-control software, and validating synchronized data capture.",
    implementation: [
      "Integrated TI AWR1843 and Analog Devices TinyRad mmWave radar systems with a ZED stereo camera on an NVIDIA Jetson Xavier NX running Linux.",
      "Developed Python-based data acquisition and timestamp synchronization routines across radar and vision subsystems.",
      "Implemented GPIO and PWM-based steering and throttle control for RC vehicle integration.",
      "Built a browser-based vehicle control interface for remote operation during data collection.",
      "Designed custom CAD brackets and mounting structures for sensor stability and mechanical integration.",
      "Managed power conversion and distribution across embedded computing and sensor subsystems.",
      "Performed Linux hardware integration, system debugging, and stress testing under real-world conditions.",
    ],
    implementationImages: [
      {
        src: "/images/rice-linux.png",
        alt: "Linux device integration on NVIDIA Jetson Xavier NX",
        caption:
          "Linux device integration and interface verification on the Jetson Xavier NX.",
      },
    ],
    validation: [
      "Validated 300+ synchronized frames using structural and timestamp consistency checks.",
      "Conducted real-world field testing to verify platform stability and data integrity.",
      "Iterated on mechanical mounting to improve sensor stability during mobile operation.",
    ],
    technologies: [
      "NVIDIA Jetson Xavier NX",
      "TI AWR1843",
      "Analog Devices TinyRad",
      "ZED Stereo Camera",
      "Python",
      "Linux",
      "GPIO",
      "PWM",
      "CAD",
      "Embedded Systems",
    ],
    metaDescription:
      "Mobile radar and stereo-vision data-collection platform with embedded computing, sensor synchronization, and RC vehicle integration at Rice University.",
  },
  "mixed-signal-waveform": {
    slug: "mixed-signal-waveform",
    title: "Mixed-Signal Waveform Generation Hardware",
    organization: "Corveus Medical",
    introduction:
      "A full mixed-signal engineering lifecycle—from component research and architecture design through PCB layout, assembly, software control, and oscilloscope validation.",
    heroImage: "/images/corveus-pcb-render.png",
    heroCaption: "PCB design and component placement developed in KiCad.",
    atAGlance: [
      {
        label: "Role",
        value: "Electrical Engineering Intern",
      },
      {
        label: "Focus",
        value: "Mixed-signal PCB design and DAC-based waveform generation",
      },
      {
        label: "Validation",
        value: "SPI bring-up and oscilloscope-based waveform testing",
      },
    ],
    overview:
      "Designed and validated a precision waveform-generation system combining analog signal conditioning, digital SPI control via a 16-bit DAC, isolated power architecture, and software-controlled operation.",
    goal: "Create a reliable mixed-signal waveform generation system with precision analog output, digital control interfaces, and validated electrical performance.",
    role: "Worked across the complete hardware design cycle—from component research and schematic/PCB design through assembly, software control, debugging, and electrical validation.",
    implementation: [
      "Researched and selected components including the DAC8831 16-bit DAC based on datasheet analysis and system requirements.",
      "Designed precision analog signal conditioning and a Howland current-source output stage.",
      "Architected an isolated ±15 V power supply for analog subsystem requirements.",
      "Completed schematic capture and multi-layer PCB layout in KiCad.",
      "Assembled the board using reflow soldering techniques.",
      "Developed Python/FTDI SPI control software for DAC initialization, command generation, and waveform updates.",
      "Performed hardware bring-up, debugging, and oscilloscope-based waveform verification.",
    ],
    implementationImages: [
      {
        src: "/images/corveus-hardware.png",
        alt: "Bench bring-up with DAC8831EVM and waveform-generation hardware",
        caption:
          "Bench bring-up with the DAC8831EVM and waveform-generation hardware.",
      },
    ],
    validation: [
      "Verified waveform generation on the bench using oscilloscope measurements during hardware bring-up and debugging.",
      "Validated SPI communication and DAC response through software-controlled test sequences.",
      "Debugged assembly and integration issues during hardware bring-up.",
    ],
    validationImages: [
      {
        src: "/images/corveus-oscilloscope.png",
        alt: "Oscilloscope verification during waveform-generation testing",
        caption:
          "Oscilloscope verification during waveform-generation testing.",
      },
    ],
    technologies: [
      "KiCad",
      "DAC8831",
      "SPI",
      "Python",
      "FTDI",
      "Mixed-Signal Electronics",
      "PCB Design",
      "Oscilloscope",
      "Reflow Soldering",
    ],
    metaDescription:
      "Mixed-signal waveform generation hardware with PCB design, DAC control, isolated power, and oscilloscope validation at Corveus Medical.",
  },
  "vlsi-16bit-alu": {
    slug: "vlsi-16bit-alu",
    title: "16-bit ALU & Kogge-Stone Adder",
    organization: "UT Austin · ECE 460R / ECE 382M",
    introduction:
      "A gate-level 16-bit ALU built around a Kogge-Stone parallel-prefix adder, completed through schematic design, functional simulation, static timing analysis, and automatic place-and-route.",
    heroImage: "/images/alu-layout.png",
    heroCaption:
      "Innovus place-and-route layout of the 16-bit ALU with area rulers.",
    heroAspectClass: "aspect-[4/3]",
    heroImageClassName: "object-contain bg-black",
    visual: "alu",
    atAGlance: [
      {
        label: "Project",
        value: "16-bit RISC ALU",
      },
      {
        label: "Focus",
        value: "Gate-level VLSI / Timing Optimization / Place-and-Route",
      },
      {
        label: "Result",
        value: "0.4284 ns adder delay · 1.6588 ns post-APR ALU",
      },
    ],
    overview:
      "Completed a two-part VLSI lab covering a 16-bit arithmetic unit and a full ALU for a 16-bit RISC datapath. The adder implements signed and unsigned add, subtract, increment, and decrement. The ALU reuses that adder and adds logic, compare, and shift operations, then finishes with Innovus place-and-route and post-layout timing.",
    goal: "Build a functionally correct, delay-optimized 16-bit adder and integrate it into a 16-bit ALU that passes official test cases, meets a competitive PrimeTime critical-path delay, and completes automatic place-and-route with verified geometry and connectivity.",
    role: "Designed the full standard-cell schematic hierarchy, wrote and ran NC Verilog tests, iterated on PrimeTime critical paths, implemented shift-overflow and flag logic, and completed Innovus place-and-route with post-APR timing.",
    implementation: [
      "Implemented a 16-bit Kogge-Stone parallel-prefix adder with generate/propagate preprocessing and a four-level prefix tree so every carry is produced in log2(16) stages.",
      "Mapped a 3-bit CODE and CIN onto a shared adder datapath so signed/unsigned add, subtract, increment, and decrement reuse one arithmetic core.",
      "Folded carry-in into bit-zero generate logic and used dual-rail XOR, AOI21 prefix cells, and pin-aware gate placement to shorten the adder critical path from 0.645 ns to 0.4284 ns.",
      "Generated COUT and VOUT from intermediate carries so signed overflow does not wait on the final carry-out.",
      "Integrated the adder with a logic unit, logarithmic barrel shifter, and signed comparator, using a small decoder to produce one-hot operation selects and VOUT enables.",
      "Combined unit results at the output bits so the adder path pays one extra NAND rather than a full mux stage.",
      "Designed the comparator independently of the adder, using group generate/propagate of A + ~B so six signed comparisons come from G, P, and CODE without a zero detector.",
      "Implemented arithmetic-shift VOUT in parallel with the shifter: SLA flags sign-bit mismatch on shifted-out bits, SRA flags precision loss, and logical/rotate shifts never assert VOUT.",
      "Restricted the design to the lab standard-cell library (NAND2, NAND3, AOI21, INVX1, INVX4) and completed Innovus automatic place-and-route of the 16-bit ALU.",
    ],
    implementationImages: [
      {
        src: "/images/alu-geometry.png",
        alt: "Innovus Verify Geometry report with zero DRC violations",
        caption:
          "Innovus Verify Geometry: no DRC violations on the placed-and-routed ALU.",
        aspectClass: "aspect-[16/10]",
        imageClassName: "object-contain bg-[#0d0d0d] p-4 sm:p-6",
      },
      {
        src: "/images/alu-connectivity.png",
        alt: "Innovus Verify Connectivity report with no problems or warnings",
        caption:
          "Innovus Verify Connectivity: no problems or warnings on the ALU netlist.",
        aspectClass: "aspect-[16/10]",
        imageClassName: "object-contain bg-[#0d0d0d] p-4 sm:p-6",
      },
    ],
    validation: [
      "Verified the adder and ALU against the official course test cases; both designs passed all provided vectors.",
      "Used NC Verilog functional simulation, including random stimulus, to check arithmetic, logic, compare, and shift behavior before timing closure.",
      "Ran Synopsys PrimeTime static timing analysis on the adder (0.4284 ns) and on the ALU before place-and-route (1.4636 ns).",
      "Completed post-APR PrimeTime analysis after Innovus layout, measuring 1.6588 ns delay and 6,340 µm² area.",
      "Verified shift-overflow independently with amount-mask, ovfbit, and random shift cases so SLA/SRA VOUT matched the specification.",
      "Checked Innovus Verify Geometry and Verify Connectivity on the final layout.",
    ],
    validationImages: [
      {
        src: "/images/alu-adder-timing.png",
        alt: "PrimeTime critical-path report for the 16-bit adder",
        caption:
          "PrimeTime adder critical path: 0.4284 ns from CODE[1] to VOUT.",
        aspectClass: "aspect-[16/10]",
        imageClassName: "object-contain bg-[#0d0d0d] p-3 sm:p-5",
      },
      {
        src: "/images/alu-postapr-timing.png",
        alt: "PrimeTime post-APR critical-path report for the 16-bit ALU",
        caption:
          "Post-APR PrimeTime critical path: 1.6588 ns from CODE[1] to C[13].",
        aspectClass: "aspect-[16/10]",
        imageClassName: "object-contain bg-[#0d0d0d] p-3 sm:p-5",
      },
    ],
    technologies: [
      "Cadence Virtuoso",
      "NC Verilog",
      "Synopsys PrimeTime",
      "Cadence Innovus",
      "Kogge-Stone Adder",
      "Standard-Cell Design",
      "Static Timing Analysis",
      "Place and Route",
      "Gate-Level Simulation",
      "VLSI",
    ],
    metaDescription:
      "16-bit Kogge-Stone adder and RISC ALU designed in a Cadence–Synopsys VLSI flow with functional simulation, PrimeTime STA, and Innovus place-and-route.",
  },
  "sram-layout-array": {
    slug: "sram-layout-array",
    title: "SRAM Cell Layout & Array Delay Model",
    organization: "UT Austin · ECE 460R / ECE 382M",
    introduction:
      "A custom-layout latch-based SRAM cell verified through DRC, LVS, and post-layout simulation, then used to model a 32×32 memory array and measure worst-case read access time including interconnect delay.",
    heroImage: "/images/sram-inverter-layout.png",
    heroCaption:
      "Custom transistor-level inverter layout in Cadence Virtuoso, used for characterization and as a building block for the memory cell.",
    heroAspectClass: "aspect-[4/3]",
    heroImageClassName: "object-contain bg-black",
    visual: "sram",
    atAGlance: [
      {
        label: "Project",
        value: "SRAM Layout & 32×32 Array Model",
      },
      {
        label: "Focus",
        value: "Custom Layout / Characterization / Access-Time Modeling",
      },
      {
        label: "Flow",
        value: "Virtuoso · Calibre · Spectre · HSPICE",
      },
    ],
    overview:
      "Completed a two-part VLSI lab covering transistor-level SRAM design and array-level delay modeling. Part A characterized a standard-cell inverter and implemented a 1-bit / 4-bit latch-based memory cell through schematic, layout, extraction, and mixed-simulator verification. Part B modeled a 32×32 array with a NOR row decoder and lumped RC wordline/bitline delay to find the longest memory read path.",
    goal: "Produce a functionally correct, DRC/LVS-clean SRAM cell layout and a schematic array model that captures interconnect delay well enough to identify and measure the worst-case decoder-to-bitline access time.",
    role: "Designed the cell schematic and layout, ran inverter characterization and post-layout simulations, completed DRC/LVS/PEX, built the 32×32 array delay model, and used Spectre to evaluate the critical read path.",
    implementation: [
      "Characterized a Metal-1 inverter with post-layout HSPICE, measuring rise and fall propagation delays across input slews of 10 ps, 30 ps, and 50 ps and output loads of 100 fF, 300 fF, and 500 fF.",
      "Implemented a 1-bit latch-based memory cell with one write port (dc, sc) and two read ports (da/sa, db/sb), using back-to-back inverters and a pMOS feedback device sized at Wp = 340 nm, Wn = 170 nm, and L = 60 nm.",
      "Created schematic and layout views of the 1-bit cell, then tiled four cells into a 4-bit word that shares sa, sb, and sc while keeping independent data I/O on each bit.",
      "Constrained 1-bit routing to M1–M2 and 4-bit routing to M1–M3, adding a right-side VDD rail and left-side ground rail so the cell could abut into an array.",
      "Extracted the 4-bit layout and verified write/read of both logic 1 and logic 0 with post-layout Spectre and HSPICE using the official course vectors.",
      "Built a 32×32 array model around the provided NOR-based row decoder and sized 1-bit cell, instantiating only the path needed for worst-case read delay rather than all 1,024 physical cells.",
      "Inserted distributed RC wordline and bitline segments using the process values 0.08 fF/µm and 0.67 Ω/µm, with an assumed 2.6 µm × 2.6 µm cell pitch, so interconnect delay appeared in schematic Spectre simulation.",
      "Swept decoder address patterns and cell initial conditions to locate the longest decoder-input-to-BIT transition, using 100 ps address ramps and 1.0 V supply.",
    ],
    implementationImages: [
      {
        src: "/images/sram-cell-layout.png",
        alt: "Custom Cadence Virtuoso layout of the SRAM cell transistors",
        caption:
          "Custom layout detail for the latch-based memory cell in Cadence Virtuoso.",
        aspectClass: "aspect-[4/3]",
        imageClassName: "object-contain bg-black",
      },
    ],
    validation: [
      "Recorded inverter Tr/Tf characterization tables and plots versus load and slew, including the maximum-slew / maximum-load waveform.",
      "Verified 1-bit and 4-bit cells with post-layout Spectre by writing and later reading both 0 and 1.",
      "Ran HSPICE on the 4-bit cell with the official test vectors and compared behavior against Spectre.",
      "Completed Calibre DRC and LVS on the 4-bit layout and used PEX extraction for post-layout netlists.",
      "Measured 4-bit layout extent from Calibre database coordinates for the area report.",
      "Simulated the 32×32 array model in Spectre and reported the 50%-to-50% worst-case access delay from decoder input to BIT.",
    ],
    technologies: [
      "Cadence Virtuoso",
      "Custom Layout",
      "Calibre DRC",
      "Calibre LVS",
      "PEX Extraction",
      "Spectre",
      "HSPICE",
      "SRAM",
      "RC Delay Modeling",
      "FreePDK45",
    ],
    metaDescription:
      "Custom latch-based SRAM cell layout with DRC/LVS and post-layout simulation, plus a 32×32 array RC delay model for worst-case memory access time.",
  },
  "asynchronous-fifo-cdc": {
    slug: "asynchronous-fifo-cdc",
    title: "Asynchronous FIFO & CDC Verification",
    organization: "SystemVerilog / Vivado",
    introduction:
      "Designing and verifying a dual-clock asynchronous FIFO for safe data transfer between independent clock domains using SystemVerilog, Gray-coded pointers, synchronization logic, and a self-checking verification environment.",
    heroImage: "/images/fifo-waveform.png",
    heroCaption:
      "Simulation waveform showing independent write/read clocks, Gray-coded pointer crossing, and full/empty behavior.",
    heroAspectClass: "aspect-[16/10] sm:aspect-[2/1]",
    heroImageClassName: "object-contain bg-black",
    visual: "fifo",
    atAGlance: [
      {
        label: "Project",
        value: "Dual-Clock Asynchronous FIFO",
      },
      {
        label: "Focus",
        value: "RTL Design / Clock-Domain Crossing / Functional Verification",
      },
      {
        label: "Status",
        value: "In Development — SystemVerilog / Vivado",
      },
    ],
    overview:
      "Designing a dual-clock asynchronous FIFO for reliable data transfer between unrelated write and read clock domains. The project focuses on RTL architecture, metastability-aware clock-domain crossing, pointer synchronization, FIFO status generation, and systematic verification.",
    goal: "Build an asynchronous FIFO that safely transfers ordered data between independent clock domains while correctly generating full and empty conditions without directly transferring multi-bit binary counters across asynchronous boundaries.",
    role: "Designing the SystemVerilog RTL architecture and developing the accompanying verification environment, including FIFO memory control, binary and Gray-coded pointer logic, synchronization stages, status generation, assertions, randomized stimulus, scoreboarding, and functional coverage.",
    implementation: [
      "Designing independent write-domain and read-domain control logic around separate wr_clk and rd_clk signals.",
      "Implementing binary read and write pointers with an additional wrap bit for address and FIFO state tracking.",
      "Converting binary pointers to Gray code before clock-domain crossing so only one pointer bit changes between consecutive states.",
      "Passing Gray-coded pointers through two-flop synchronizers before using them in the opposite clock domain.",
      "Generating the FULL condition inside the write domain using the synchronized read pointer.",
      "Generating the EMPTY condition inside the read domain using the synchronized write pointer.",
      "Using dual-port FIFO storage so write and read operations can proceed independently under their respective clocks.",
      "Separating synchronization, pointer control, memory, and status-generation logic into clear RTL blocks.",
    ],
    validation: [
      "Developing a self-checking SystemVerilog testbench with an expected-data scoreboard for verifying FIFO ordering and integrity.",
      "Applying randomized write and read activity with independent clock periods to exercise asynchronous operation.",
      "Adding assertions for overflow, underflow, invalid full/empty behavior, and data-ordering violations.",
      "Building functional coverage around occupancy states, pointer wraparound, full/empty transitions, and concurrent activity.",
      "Testing reset behavior and pointer synchronization across both clock domains.",
      "Exercising corner cases including write-faster-than-read, read-faster-than-write, near-full, near-empty, and pointer rollover conditions.",
    ],
    validationImages: [
      {
        src: "/images/fifo-waveform.png",
        alt: "GTKWave capture of asynchronous FIFO write and read transactions",
        caption:
          "Write and read activity across independent clocks, with Gray pointer synchronization and full/empty flags.",
        aspectClass: "aspect-[16/10]",
        imageClassName: "object-contain bg-black",
      },
    ],
    technologies: [
      "SystemVerilog",
      "RTL Design",
      "Asynchronous FIFO",
      "Clock-Domain Crossing",
      "Gray Code",
      "Two-Flop Synchronizers",
      "Assertions",
      "Randomized Verification",
      "Functional Coverage",
      "Vivado",
    ],
    metaDescription:
      "SystemVerilog asynchronous FIFO and clock-domain-crossing project using Gray-coded pointers, two-flop synchronization, assertions, randomized verification, and functional coverage.",
  },
  "fpga-stopwatch": {
    slug: "fpga-stopwatch",
    title: "FPGA RTL Stopwatch",
    organization: "Xilinx Basys 3 / Artix-7 FPGA",
    introduction:
      "A modular Verilog RTL stopwatch implementing finite-state control, synchronous timing, and seven-segment display output on a Xilinx Artix-7 FPGA.",
    visual: "fpga",
    atAGlance: [
      {
        label: "Project",
        value: "FPGA RTL Stopwatch",
      },
      {
        label: "Focus",
        value: "Modular RTL architecture and digital control",
      },
      {
        label: "Platform",
        value: "Xilinx Basys 3 / Artix-7",
      },
    ],
    overview:
      "Designed a complete digital logic system from architecture through RTL implementation and hardware validation on the Basys 3 development board.",
    goal: "Implement a functional stopwatch with start, stop, and reset controls using modular Verilog RTL with clean separation between control logic, timing, and display subsystems.",
    role: "Designed the RTL architecture, designed and implemented the Verilog modules, synthesized and implemented the design in Vivado, and validated operation on hardware.",
    implementation: [
      "Designed a finite-state machine for stopwatch control (start, stop, reset).",
      "Implemented synchronous counters with clock division for timing logic.",
      "Developed input debouncing logic for reliable button press detection.",
      "Created seven-segment display control modules for time readout.",
      "Structured the design with modular combinational and sequential logic blocks.",
      "Synthesized and implemented the design using Xilinx Vivado for the Artix-7 FPGA.",
    ],
    validation: [
      "Validated FSM state transitions, start/stop/reset behavior, timing logic, and seven-segment display operation on the Basys 3 board.",
      "Confirmed clock division and counter rollover behavior through hardware testing.",
    ],
    technologies: [
      "Verilog",
      "Vivado",
      "FPGA",
      "RTL",
      "FSM",
      "Digital Logic",
      "Artix-7",
      "Basys 3",
    ],
    showFpgaBreakdown: true,
    metaDescription:
      "Modular Verilog RTL stopwatch with FSM control, clock division, and seven-segment display on Xilinx Artix-7 FPGA.",
  },
  neurotech: {
    slug: "neurotech",
    title: "Embedded Hardware Systems",
    organization: "Longhorn Neurotech",
    introduction:
      "Hardware and software integration for a brain-controlled robotics platform combining distributed sensing, embedded control, and real-time motor interfaces.",
    visual: "neurotech",
    atAGlance: [
      {
        label: "Team",
        value: "Hardware Systems",
      },
      {
        label: "Focus",
        value: "Sensor integration and motor-control interfaces",
      },
      {
        label: "Performance",
        value: "≤5 ms module synchronization / 500 Hz control architecture",
      },
    ],
    overview:
      "Contributed to the embedded hardware systems for a brain-computer interface robotics platform, integrating multiple sensor modalities with motor control and real-time synchronization requirements.",
    goal: "Build reliable embedded hardware subsystems that integrate LiDAR, RGB, and ultrasonic sensing with motor control for a responsive brain-controlled rover platform.",
    role: "Worked on sensor integration, embedded control interfaces, motor control architecture, and system-level debugging across distributed hardware modules.",
    implementation: [
      "Integrated LiDAR, RGB, and ultrasonic sensing subsystems into the robotics platform.",
      "Developed embedded control interfaces for distributed sensor and actuator modules.",
      "Developed motor-control interface hardware supporting a 500 Hz closed-loop control architecture.",
      "Coordinated hardware and software timing to maintain ≤5 ms synchronization across system modules.",
      "Debugged hardware/software integration issues across distributed digital interfaces.",
      "Worked within a brain-computer interface context for brain-controlled rover operation.",
    ],
    validation: [
      "Validated sensor data integration and timing across distributed modules.",
      "Tested motor control responsiveness and synchronization under closed-loop operation.",
      "Debugged and resolved integration issues during system commissioning.",
    ],
    technologies: [
      "Embedded Systems",
      "Robotics",
      "LiDAR",
      "Motor Control",
      "Sensors",
      "C++",
      "Python",
    ],
    metaDescription:
      "Embedded hardware systems for brain-controlled robotics with sensor integration and real-time motor control at Longhorn Neurotech.",
  },
};
