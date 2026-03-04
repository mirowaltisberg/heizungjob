import { ImageResponse } from "next/og";

export const alt = "heizungjob.ch — Heizungsjobs Schweiz";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Flame */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="120"
          height="120"
          style={{ marginBottom: 32 }}
        >
          <path
            d="M24 44c-7-4-12-11-12-19 0-6 3-12 7-17 1 5 4 9 8 11-1-8 3-16 9-22 0 8 3 14 7 18 3-2 5-6 5-10 3 5 4 10 4 15 0 10-7 19-16 22-1-3-2-7-2-10-3 4-7 8-10 12z"
            fill="#e74c3c"
          />
        </svg>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span style={{ fontSize: 72, fontWeight: 900, color: "#f8fafc", letterSpacing: -1 }}>
            Heizung
          </span>
          <span style={{ fontSize: 72, fontWeight: 900, color: "#e74c3c", letterSpacing: -1 }}>
            job
          </span>
          <span style={{ fontSize: 52, fontWeight: 400, color: "#94a3b8", letterSpacing: -1 }}>
            .ch
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 20,
            letterSpacing: 0.5,
          }}
        >
          Die Jobbörse für Heizungs-Fachkräfte in der Schweiz
        </div>
      </div>
    ),
    { ...size }
  );
}
