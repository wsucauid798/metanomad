import React from "react";

export type ShapeConfig = {
  size: number;
  color: string;
  angle: number;
  distance: number;
  blur?: number;
  borderRadius?: string;
  extraStyle?: React.CSSProperties;
};

type BackgroundProps = {
  rotationSpeed?: number;
  shapes?: ShapeConfig[];
};

export const Background: React.FC<BackgroundProps> = ({
  rotationSpeed = 20,
  shapes = [],
}) => {
  return (
    <div className="group">
      <div className="center-point" />
      <div
        className="rotating-group"
        style={{
          animation: `spin ${rotationSpeed}s linear infinite`,
        }}
      >
        {shapes.map((shape, index) => (
          <div
            key={index}
            style={{
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${shape.angle}deg) translateX(${shape.distance}px)`,
              borderRadius: shape.borderRadius || "50%",
              filter: shape.blur ? `blur(${shape.blur}px)` : undefined,
              ...shape.extraStyle,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage
export const ExampleBackground = () => (
  <Background
    rotationSpeed={15}
    shapes={[
      { size: 700, color: "#fef8ae", angle: 0, distance: 400, blur: 0, borderRadius: "70% 50%" },
      { size: 700, color: "#ffd3e2", angle: 90, distance: 400, blur: 0, borderRadius: "10% 30%" },
      { size: 700, color: "#c5f4f7", angle: 180, distance: 400, blur: 0 },
      { size: 500, color: "#d0f5b1", angle: 270, distance: 400, blur: 0, borderRadius: "50% 20%" },
    ]}
  />
);


export const BlurSvgExample = () => (
  <div>
    <svg width="200" height="200" style={{ filter: "blur(10px)" }}>
      <circle cx="100" cy="100" r="50" fill="blue" />
    </svg>
  </div>
);
