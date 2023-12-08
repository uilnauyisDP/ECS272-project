import React from "react";

export interface LegendItem {
  color: string;
  label: string;
  opacity: number;
}

export const ColorLegend: React.FC<{ legendItems: LegendItem[] }> = ({
  legendItems,
}) => {
  const cmap: Record<string, string> = {
    blue: "rgba(0, 0, 255,",
    green: "rgba(0, 255, 0,",
    red: "rgba(255, 0, 0,",
  };

  return (
    <div className="color-legend">
      <div>
        <span style={{ color: "transparent" }}>placeholder</span>
        <div style={{ border: "solid #ccc" }}>
          <div>
            <span style={{ color: "transparent",display: "inline-block",width: "160px", height: "10px" }}></span>
            {legendItems.map((item, index) => (
              <span
                key={index}
                className="color-box"
                style={{
                  display: "inline-block",
                  width: "160px",
                  backgroundColor: `${cmap[item.color]} ${item.opacity})`,
                  color: "transparent",
                  textAlign: "center",
                  height: "10px",
                }}
              ></span>
            ))}
          </div>
          <div>
            <span
              className="color-box"
              style={{
                width: "160px",
                textAlign: "center",
                display: "inline-block",
              }}
            >
              0
            </span>
            {legendItems.map((item, index) => (
              <span
                key={index}
                className="color-box"
                style={{
                  width: "160px",
                  textAlign: "center",
                  display: "inline-block",
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
        <span style={{ color: "transparent" }}>placeholder</span>
      </div>
    </div>
  );
};
