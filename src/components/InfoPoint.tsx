import { Html, Line } from "@react-three/drei";
import { useState } from "react";
import type { ReactNode } from "react";
import * as THREE from "three";

interface InfoPointProps {
  position: [number, number, number];
  targetPosition: [number, number, number];
  title: string;
  description?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export function InfoPoint({
  position,
  targetPosition,
  title,
  description,
  icon,
  onClick,
}: InfoPointProps) {
  const [hovered, setHovered] = useState(false);

  const points = [
    new THREE.Vector3(...position),
    new THREE.Vector3(...targetPosition),
  ];

  return (
    <group>
      <Line
        points={points}
        color={hovered ? "#ffffff" : "#a0a0a0"}
        lineWidth={hovered ? 2.5 : 1.5}
        transparent
        opacity={hovered ? 1 : 0.95}
      />
      <Html position={targetPosition} center distanceFactor={14}>
        <div
          className="info-point-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onClick}
          style={{ cursor: onClick ? "pointer" : "default" }}
        >
          <div className="select-none bg-[#DBDBDB]/30 backdrop-blur-sm rounded-[8px] px-6 py-3">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 whitespace-nowrap">
                {icon && <div className="flex-shrink-0 w-6">{icon}</div>}
                <p className="text-black text-base font-medium whitespace-nowrap">
                  {title}
                </p>
              </div>
              {description && (
                <p className="text-center italic text-black text-sm whitespace-nowrap -mt-1">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}
