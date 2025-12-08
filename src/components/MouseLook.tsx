import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface MouseLookProps {
  /**
   * Sensitivity of mouse movement (default: 0.5)
   * Higher values = more responsive
   */
  sensitivity?: number;
  /**
   * Maximum angle in radians the camera can look up/down (default: Math.PI / 6)
   */
  maxVerticalAngle?: number;
  /**
   * Maximum angle in radians the camera can look left/right (default: Math.PI / 4)
   */
  maxHorizontalAngle?: number;
  /**
   * Smoothing factor for camera movement (0-1, default: 0.1)
   * Lower values = smoother but slower response
   */
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
  const lookDistanceRef = useRef(10); // Distance ahead of camera to look at
  const initialRotationRef = useRef<THREE.Euler | null>(null);

  // Store initial camera rotation
  useEffect(() => {
    initialRotationRef.current = camera.rotation.clone();
  }, [camera]);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Apply sensitivity
      mouseRef.current.x = normalizedX * sensitivity;
      mouseRef.current.y = normalizedY * sensitivity;

      // Clamp to max angles
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

  // Update camera target each frame
  useFrame(() => {
    if (!initialRotationRef.current) return;

    // Smooth interpolation
    currentTargetRef.current.x +=
      (targetRef.current.x - currentTargetRef.current.x) * smoothing;
    currentTargetRef.current.y +=
      (targetRef.current.y - currentTargetRef.current.y) * smoothing;

    // Calculate target position based on initial forward direction
    // Get the initial forward direction (camera looks down -Z in Three.js)
    const initialForward = new THREE.Vector3(0, 0, -1);
    initialForward.applyEuler(initialRotationRef.current);

    // Get initial right and up vectors
    const initialRight = new THREE.Vector3(1, 0, 0);
    const initialUp = new THREE.Vector3(0, 1, 0);
    initialRight.applyEuler(initialRotationRef.current);
    initialUp.applyEuler(initialRotationRef.current);

    // Calculate base target position (straight ahead from camera's initial direction)
    const baseTarget = new THREE.Vector3()
      .copy(camera.position)
      .add(initialForward.clone().multiplyScalar(lookDistanceRef.current));

    // Apply mouse offset to the target
    const offset = new THREE.Vector3()
      .addScaledVector(initialRight, currentTargetRef.current.x)
      .addScaledVector(initialUp, currentTargetRef.current.y);

    const newTarget = baseTarget.add(offset);

    // Update camera to look at the new target
    camera.lookAt(newTarget);
  });

  return null;
}
