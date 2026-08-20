import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#20364f",
          borderRadius: "36px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="120"
          height="120"
        >
          <g fill="none" stroke="#edf3f8" strokeWidth="3" strokeLinecap="square">
            <path d="M5 14h7v20H5M43 14h-7v20h7" />
            <path d="M14 10v28M20.5 10v28M27 10v28M33.5 10v28" />
          </g>
          <circle cx="24" cy="24" r="3.5" fill="#d94a32" stroke="#20364f" strokeWidth="1.5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
