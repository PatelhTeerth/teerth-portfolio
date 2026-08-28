import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171717",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          T
        </span>
      </div>
    ),
    { ...size }
  );
}
