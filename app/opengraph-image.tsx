import { ImageResponse } from "next/og";
import { profile } from "@/app/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HIGHLIGHTS = ["Java", "Spring Boot", "PostgreSQL", "Docker", "Microservices"];

/**
 * The link preview card. Rendered at build time by Satori, which supports only
 * flexbox and inline styles — no grid, no class names, and every element with
 * more than one child needs an explicit `display: flex`.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "76px 80px",
          backgroundColor: "#0a0d12",
          backgroundImage:
            "radial-gradient(circle at 10% -10%, rgba(45, 212, 191, 0.22), transparent 45%), radial-gradient(circle at 96% 4%, rgba(129, 140, 248, 0.20), transparent 45%)",
        }}
      >
        {/* Accent edge, mirroring the scroll-progress rule on the site. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 8,
            backgroundImage: "linear-gradient(to right, #2dd4bf, #818cf8, transparent)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              backgroundColor: "#2dd4bf",
              marginRight: 16,
            }}
          />
          <div style={{ fontSize: 24, color: "#98a0ae", letterSpacing: 3 }}>
            AVAILABLE FOR BACKEND &amp; FULL-STACK WORK
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              color: "#e8eaee",
              letterSpacing: -4,
              lineHeight: 1.04,
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 36, color: "#2dd4bf", marginTop: 16 }}>
            {profile.role}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#98a0ae",
              marginTop: 24,
              maxWidth: 860,
              lineHeight: 1.45,
            }}
          >
            {profile.tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          {HIGHLIGHTS.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                marginRight: 14,
                padding: "11px 22px",
                fontSize: 22,
                color: "#98a0ae",
                backgroundColor: "#11161e",
                border: "1px solid #212936",
                borderRadius: 9999,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
