export interface ProjectPreview {
  slug: string;
  title: string;
  organization: string;
  description: string;
  technologies: string[];
  image?: string;
  visual?: "fpga" | "neurotech";
  reverse?: boolean;
  imageClassName?: string;
  aspectClass?: string;
}

export interface AtAGlanceItem {
  label: string;
  value: string;
}

export interface NarrativeImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  organization: string;
  introduction: string;
  heroImage?: string;
  heroCaption?: string;
  visual?: "fpga" | "neurotech";
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
    reverse: true,
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
