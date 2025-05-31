import React from "react";

export type BackgroundProps = {
  rotationSpeed?: number;     // 控制旋转速度
  imageUrl?: string;          // 背景图路径
  position?: string;          // 背景图位置 (CSS background-position)
  scale?: number;            // 背景图缩放比例
  orbitA?: number;         // 长轴半径
orbitB?: number;         // 短轴半径
};

export const SvgBackground: React.FC<BackgroundProps> = ({
  rotationSpeed = 20,
  imageUrl = "/color_bg.svg",
  position = "center", // 默认居中
  scale = 0.5, // 默认缩放比例
  orbitA = 0, // 默认长轴半径
  orbitB = 0, // 默认短轴半径
}) => {
  const ellipticalOrbitStyle: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    animation: `elliptical-orbit-${orbitA}-${orbitB} ${rotationSpeed * 2}s linear infinite`,
    zIndex: -2,
  };

  const selfSpinStyle: React.CSSProperties = {
    animation: `spin ${rotationSpeed}s linear infinite`,
  };

  return (
    <>
      <style>
        {`
          @keyframes elliptical-orbit-${orbitA}-${orbitB} {
            0%   { transform: translate(-50%, -50%) translateX(${orbitA}px) translateY(0px); }
            25%  { transform: translate(-50%, -50%) translateX(0px) translateY(${orbitB}px); }
            50%  { transform: translate(-50%, -50%) translateX(-${orbitA}px) translateY(0px); }
            75%  { transform: translate(-50%, -50%) translateX(0px) translateY(-${orbitB}px); }
            100% { transform: translate(-50%, -50%) translateX(${orbitA}px) translateY(0px); }
          }
        `}
      </style>
      <div style={ellipticalOrbitStyle}>
        <div
          style={{
            width: "200vw",
            height: "200vh",
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${scale * 100}% ${scale * 100}%`,
            backgroundPosition: position,
            ...selfSpinStyle,
          }}
        />
      </div>
    </>
  );
};