import { ImageResponse } from "next/og";

export const alt = "heizungjob.ch — Heizungjobs Schweiz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 86px",
          background: "#edf3f8",
          borderTop: "18px solid #d94a32",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="90" height="90">
            <g fill="none" stroke="#274a79" strokeWidth="3" strokeLinecap="square">
              <path d="M5 14h7v20H5M43 14h-7v20h7" />
              <path d="M14 10v28M20.5 10v28M27 10v28M33.5 10v28" />
            </g>
            <circle cx="24" cy="24" r="3.5" fill="#d94a32" stroke="#edf3f8" strokeWidth="1.5" />
          </svg>
          <div style={{ color: "#274a79", fontSize: 24, fontWeight: 800, letterSpacing: 3 }}>
            HEIZUNG · SCHWEIZ
          </div>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span style={{ fontSize: 84, fontWeight: 900, color: "#20364f", letterSpacing: -4 }}>
            heizung
          </span>
          <span style={{ fontSize: 84, fontWeight: 900, color: "#274a79", letterSpacing: -4 }}>
            job
          </span>
          <span style={{ fontSize: 58, fontWeight: 700, color: "#d94a32", letterSpacing: -2 }}>
            .ch
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#49647f",
            marginTop: 20,
            letterSpacing: 0.5,
          }}
        >
          Wärme braucht Fachkräfte.
        </div>
      </div>
    ),
    { ...size }
  );
}
