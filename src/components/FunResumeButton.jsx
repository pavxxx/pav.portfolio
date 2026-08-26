import { Download } from "lucide-react";

export default function FunResumeButton({
  driveUrl = "https://drive.google.com/file/d/1bd2u-W0PDzMMP00jfGwlYmU26Nsh-rKw/view?usp=sharing",
  style,
}) {
  return (
    <a
      href={driveUrl}
      target="_blank"
      rel="noreferrer"
      className="btn-invert hover-target"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 24px",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "0.9rem",
        textTransform: "uppercase",
        ...style,
      }}
    >
      <Download size={18} />
      <span>Download Resume</span>
    </a>
  );
}
