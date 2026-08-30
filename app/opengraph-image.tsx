import { ImageResponse } from "next/og";

export const alt = "Teerth Patel — Electrical & Computer Engineering";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f9f8f6",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 6,
            height: "100%",
            background: "#2c3e5a",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 48,
            left: 80,
            width: 1040,
            height: 1,
            background: "#e4e2de",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 80,
            width: 1040,
            height: 1,
            background: "#e4e2de",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 88,
            right: 152,
            width: 1,
            height: 454,
            background: "#e4e2de",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 88,
            right: 116,
            width: 1,
            height: 454,
            background: "#e4e2de",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 88,
            right: 80,
            width: 1,
            height: 454,
            background: "#e4e2de",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 40,
            left: 72,
            width: 22,
            height: 22,
            borderTop: "1.5px solid #2c3e5a",
            borderLeft: "1.5px solid #2c3e5a",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 72,
            width: 22,
            height: 22,
            borderTop: "1.5px solid #2c3e5a",
            borderRight: "1.5px solid #2c3e5a",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 72,
            width: 22,
            height: 22,
            borderBottom: "1.5px solid #2c3e5a",
            borderLeft: "1.5px solid #2c3e5a",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 72,
            width: 22,
            height: 22,
            borderBottom: "1.5px solid #2c3e5a",
            borderRight: "1.5px solid #2c3e5a",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            paddingLeft: 96,
            paddingRight: 200,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#141414",
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Teerth Patel
          </div>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 2,
              background: "#2c3e5a",
              marginTop: 28,
              marginBottom: 28,
            }}
          />
          <div
            style={{
              display: "flex",
              color: "#141414",
              fontSize: 30,
              fontWeight: 500,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Electrical & Computer Engineering
          </div>
          <div
            style={{
              display: "flex",
              color: "#6b7280",
              fontSize: 22,
              marginTop: 20,
              letterSpacing: "0.01em",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Embedded Systems · Hardware · FPGA / RTL · Robotics
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
