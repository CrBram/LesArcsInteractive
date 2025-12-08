import { Html, Line } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { playWhoosh } from "./scene/WhooshGust";
import { useSound } from "@/contexts/SoundContext";

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
  const { camera, controls } = useThree();
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const onClickExecutedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const hoverAnimationRef = useRef<gsap.core.Timeline | null>(null);

  const points = [
    new THREE.Vector3(...position),
    new THREE.Vector3(...targetPosition),
  ];

  useEffect(() => {
    if (!containerRef.current || !contentRef.current || !textRef.current)
      return;

    if (hoverAnimationRef.current) {
      hoverAnimationRef.current.kill();
    }

    if (hovered) {
      gsap.set(textRef.current, { display: "flex", width: "auto", opacity: 0 });
      const contentWidth = contentRef.current.scrollWidth;
      gsap.set(textRef.current, { width: 0, opacity: 0 });

      hoverAnimationRef.current = gsap.timeline();
      hoverAnimationRef.current
        .to(containerRef.current, {
          borderRadius: "8px",
          width: contentWidth,
          height: "auto",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          textRef.current,
          {
            opacity: 1,
            width: "auto",
            duration: 0.3,
            ease: "power2.out",
          },
          "<0.1"
        );
    } else {
      hoverAnimationRef.current = gsap.timeline({
        onComplete: () => {
          if (textRef.current) {
            gsap.set(textRef.current, { display: "none" });
          }
        },
      });
      hoverAnimationRef.current
        .to(textRef.current, {
          opacity: 0,
          width: 0,
          duration: 0.2,
          ease: "power2.in",
        })
        .to(
          containerRef.current,
          {
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(219, 219, 219, 0.3)",
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        );
    }
  }, [hovered]);

  const { startAudio } = useSound();

  const handleClick = () => {
    if (!controls) return;

    startAudio();
    playWhoosh();

    if (animationRef.current) {
      animationRef.current.kill();
    }

    onClickExecutedRef.current = false;

    const currentCameraPos = new THREE.Vector3();
    const currentTarget = new THREE.Vector3();
    camera.getWorldPosition(currentCameraPos);

    const orbitControls = controls as any;
    currentTarget.copy(orbitControls.target);

    const targetVec = new THREE.Vector3(...position);

    const currentDirection = new THREE.Vector3()
      .subVectors(currentCameraPos, currentTarget)
      .normalize();

    const distance = -5;
    const heightOffset = 2;

    const offset = currentDirection.clone().multiplyScalar(-distance);
    offset.y = heightOffset;

    const desiredCameraPos = new THREE.Vector3().addVectors(targetVec, offset);

    const startCameraPos = currentCameraPos.clone();
    const startTarget = currentTarget.clone();

    const cameraAnim = {
      x: startCameraPos.x,
      y: startCameraPos.y,
      z: startCameraPos.z,
    };

    const targetAnim = {
      x: startTarget.x,
      y: startTarget.y,
      z: startTarget.z,
    };

    orbitControls.enabled = false;

    const timeline = gsap.timeline({
      onUpdate: () => {
        if (!controls) return;
        camera.position.set(cameraAnim.x, cameraAnim.y, cameraAnim.z);
        orbitControls.target.set(targetAnim.x, targetAnim.y, targetAnim.z);
        orbitControls.update();

        if (
          onClick &&
          !onClickExecutedRef.current &&
          timeline.progress() >= 0.9
        ) {
          onClickExecutedRef.current = true;
          onClick();
        }
      },
      onComplete: () => {
        orbitControls.enabled = true;

        if (onClick && !onClickExecutedRef.current) {
          onClickExecutedRef.current = true;
          onClick();
        }
      },
    });

    timeline.to(cameraAnim, {
      x: desiredCameraPos.x,
      y: desiredCameraPos.y,
      z: desiredCameraPos.z,
      duration: 2.5,
      ease: "power2.inOut",
    });

    timeline.to(
      targetAnim,
      {
        x: targetVec.x,
        y: targetVec.y,
        z: targetVec.z,
        duration: 2.5,
        ease: "power2.inOut",
      },
      "<" // Start at the same time as camera animation
    );

    animationRef.current = timeline;
  };

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
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <div
            ref={containerRef}
            className="select-none bg-[#DBDBDB]/30 backdrop-blur-sm rounded-full overflow-hidden flex items-center justify-center"
            style={{
              width: "40px",
              height: "40px",
            }}
          >
            <div
              ref={contentRef}
              className="flex items-center gap-2 whitespace-nowrap px-6 py-3"
            >
              {icon && (
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  {icon}
                </div>
              )}
              <div
                ref={textRef}
                className="flex flex-col overflow-hidden"
                style={{
                  opacity: 0,
                  width: 0,
                  display: "none",
                }}
              >
                <p className="text-black text-base font-medium whitespace-nowrap">
                  {title}
                </p>
                {description && (
                  <p className="text-center italic text-black text-sm whitespace-nowrap -mt-1">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}
