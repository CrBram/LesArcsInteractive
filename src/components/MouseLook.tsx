import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface MouseLookProps {
  sensitivity?: number;
  maxVerticalAngle?: number;
  maxHorizontalAngle?: number;
  smoothing?: number;
}

export function MouseLook({
  sensitivity = 0.5,
  maxVerticalAngle = Math.PI / 6,
  maxHorizontalAngle = Math.PI / 4,
  smoothing = 0.1,
}: MouseLookProps = {}) {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const currentTargetRef = useRef({ x: 0, y: 0 });
  const lookDistanceRef = useRef(10);
  const initialRotationRef = useRef<THREE.Euler | null>(null);

  useEffect(() => {
    initialRotationRef.current = camera.rotation.clone();
  }, [camera]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(event.clientY / window.innerHeight) * 2 + 1;

      mouseRef.current.x = normalizedX * sensitivity;
      mouseRef.current.y = normalizedY * sensitivity;

      targetRef.current.x = Math.max(
        -maxHorizontalAngle,
        Math.min(maxHorizontalAngle, mouseRef.current.x)
      );
      targetRef.current.y = Math.max(
        -maxVerticalAngle,
        Math.min(maxVerticalAngle, mouseRef.current.y)
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [sensitivity, maxVerticalAngle, maxHorizontalAngle]);

  useFrame(() => {
    if (!initialRotationRef.current) return;

    currentTargetRef.current.x +=
      (targetRef.current.x - currentTargetRef.current.x) * smoothing;
    currentTargetRef.current.y +=
      (targetRef.current.y - currentTargetRef.current.y) * smoothing;

    const initialForward = new THREE.Vector3(0, 0, -1);
    initialForward.applyEuler(initialRotationRef.current);

    const initialRight = new THREE.Vector3(1, 0, 0);
    const initialUp = new THREE.Vector3(0, 1, 0);
    initialRight.applyEuler(initialRotationRef.current);
    initialUp.applyEuler(initialRotationRef.current);

    const baseTarget = new THREE.Vector3()
      .copy(camera.position)
      .add(initialForward.clone().multiplyScalar(lookDistanceRef.current));

    const offset = new THREE.Vector3()
      .addScaledVector(initialRight, currentTargetRef.current.x)
      .addScaledVector(initialUp, currentTargetRef.current.y);

    const newTarget = baseTarget.add(offset);

    camera.lookAt(newTarget);
  });

  return null;
}
