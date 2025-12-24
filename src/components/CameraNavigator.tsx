import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { useCameraNavigation } from "@/contexts/CameraNavigationContext";

export function CameraNavigator() {
  const { camera } = useThree();
  const { currentTarget, clearTarget, setActiveTarget } = useCameraNavigation();
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const initialCameraState = useRef<{
    position: [number, number, number];
    rotation: [number, number, number];
  } | null>(null);

  useEffect(() => {
    if (!initialCameraState.current) {
      const pos = new THREE.Vector3();
      camera.getWorldPosition(pos);
      initialCameraState.current = {
        position: [pos.x, pos.y, pos.z],
        rotation: [camera.rotation.x, camera.rotation.y, camera.rotation.z],
      };

      setActiveTarget({
        position: [pos.x, pos.y, pos.z],
        restoreInitial: true,
      });
    }
  }, [camera, setActiveTarget]);

  useEffect(() => {
    if (!currentTarget) return;

    if (animationRef.current) {
      animationRef.current.kill();
    }

    const currentCameraPos = new THREE.Vector3();
    camera.getWorldPosition(currentCameraPos);
    const currentRotation = camera.rotation.clone();

    let desiredCameraPos: THREE.Vector3;
    let desiredRotation: THREE.Euler;

    if (currentTarget.restoreInitial && initialCameraState.current) {
      const state = initialCameraState.current;
      desiredCameraPos = new THREE.Vector3(...state.position);
      desiredRotation = new THREE.Euler(...state.rotation, "XYZ");
    } else {
      const targetVec = new THREE.Vector3(...currentTarget.position);
      const currentDirection = new THREE.Vector3(0, 0, -1);
      currentDirection.applyQuaternion(camera.quaternion);

      const offset = currentDirection.clone().multiplyScalar(-5);
      offset.y = 2;
      desiredCameraPos = new THREE.Vector3().addVectors(targetVec, offset);

      const tempCamera = new THREE.PerspectiveCamera();
      tempCamera.position.copy(desiredCameraPos);
      tempCamera.lookAt(targetVec);
      desiredRotation = tempCamera.rotation.clone();
    }

    const startCameraPos = currentCameraPos.clone();
    const startRotation = currentRotation.clone();

    const cameraAnim = {
      x: startCameraPos.x,
      y: startCameraPos.y,
      z: startCameraPos.z,
      rotX: startRotation.x,
      rotY: startRotation.y,
      rotZ: startRotation.z,
    };

    const timeline = gsap.timeline({
      onComplete: () => {
        setActiveTarget(currentTarget);
        clearTarget();
      },
    });

    timeline.to(cameraAnim, {
      x: desiredCameraPos.x,
      y: desiredCameraPos.y,
      z: desiredCameraPos.z,
      rotX: desiredRotation.x,
      rotY: desiredRotation.y,
      rotZ: desiredRotation.z,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.position.set(cameraAnim.x, cameraAnim.y, cameraAnim.z);
        camera.rotation.set(cameraAnim.rotX, cameraAnim.rotY, cameraAnim.rotZ);
      },
    });

    animationRef.current = timeline;

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [currentTarget, camera, clearTarget, setActiveTarget]);

  return null;
}
