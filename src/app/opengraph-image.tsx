import { ImageResponse } from "next/og";

export const alt = "Cloverdale Roofing Co. — roof repair and replacement in Cloverdale, BC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "#091b26",
      color: "#f7fafb",
      padding: "72px",
      fontFamily: "Arial",
      borderBottom: "22px solid #dff146",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "22px", fontSize: 30, fontWeight: 700 }}>
        <span style={{ display: "flex", background: "#dff146", color: "#091b26", width: 72, height: 72, alignItems: "center", justifyContent: "center" }}>CR</span>
        CLOVERDALE ROOFING CO.
      </div>
      <div style={{ display: "flex", fontSize: 72, lineHeight: 1.02, maxWidth: 940, fontWeight: 700 }}>
        Roof repair and replacement in Cloverdale, BC.
      </div>
      <div style={{ display: "flex", fontSize: 25, color: "#c7d4da" }}>cloverdaleroofingco.com</div>
    </div>,
    size,
  );
}
