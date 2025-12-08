import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

interface NavigationTarget {
  position: [number, number, number];
  restoreInitial?: boolean;
}

interface CameraNavigationContextType {
  navigateTo: (target: NavigationTarget) => void;
  clearTarget: () => void;
  currentTarget: NavigationTarget | null;
  activeTarget: NavigationTarget | null;
  setActiveTarget: (target: NavigationTarget | null) => void;
}

const CameraNavigationContext = createContext<
  CameraNavigationContextType | undefined
>(undefined);

export function CameraNavigationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentTarget, setCurrentTarget] = useState<NavigationTarget | null>(
    null
  );
  const [activeTarget, setActiveTarget] = useState<NavigationTarget | null>(
    null
  );

  const navigateTo = useCallback((target: NavigationTarget) => {
    setCurrentTarget(target);
  }, []);

  const clearTarget = useCallback(() => {
    setCurrentTarget(null);
  }, []);

  return (
    <CameraNavigationContext.Provider
      value={{
        navigateTo,
        clearTarget,
        currentTarget,
        activeTarget,
        setActiveTarget,
      }}
    >
      {children}
    </CameraNavigationContext.Provider>
  );
}

export function useCameraNavigation() {
  const context = useContext(CameraNavigationContext);
  if (!context) {
    throw new Error(
      "useCameraNavigation must be used within CameraNavigationProvider"
    );
  }
  return context;
}
