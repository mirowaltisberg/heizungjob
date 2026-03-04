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
          background: "#e74c3c",
          borderRadius: "36px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="120"
          height="120"
        >
          <path
            d="M24 44c-7-4-12-11-12-19 0-6 3-12 7-17 1 5 4 9 8 11-1-8 3-16 9-22 0 8 3 14 7 18 3-2 5-6 5-10 3 5 4 10 4 15 0 10-7 19-16 22-1-3-2-7-2-10-3 4-7 8-10 12z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
