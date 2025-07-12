"use client";

import { useEffect, useState } from "react";

/**
 * Hook to check if the component has been mounted on the client side.
 * Useful for preventing hydration mismatches when using browser-only APIs.
 *
 * @returns {boolean} true if the component has been mounted on the client, false otherwise
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
