import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0A0A0A",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.5px",
            lineHeight: 1,
          }}
        >
          AJ
        </span>
      </div>
    ),
    { ...size }
  );
}
