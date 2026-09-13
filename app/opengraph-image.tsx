import { ImageResponse } from "next/og";

export const alt = "Deumatic digital product and technology partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#F5F2EA", color: "#0B1420", padding: "64px 72px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, fontWeight: 700 }}>
        <span>Deumatic</span><span style={{ color: "#566273", fontSize: 16, letterSpacing: 3 }}>DIGITAL PRODUCT + TECHNOLOGY</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <span style={{ width: 76, height: 8, background: "#1F5CFF", marginBottom: 34 }} />
        <div style={{ fontSize: 72, lineHeight: 1.03, fontWeight: 760, letterSpacing: -3 }}>We turn ambitious ideas into digital products people rely on.</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#566273", fontSize: 20 }}><span>Strategy · Experience · Software · AI · Growth</span><span>deumatic.com</span></div>
    </div>,
    size
  );
}
