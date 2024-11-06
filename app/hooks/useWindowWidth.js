import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);

    const handleMediaChange = (event) => {
      setMatches(event.matches);
    };

    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", handleMediaChange);

    return () =>
      mediaQueryList.removeEventListener("change", handleMediaChange);
  }, [query]);

  return matches;
}

export function useDeviceType() {
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return { isMobile, isTablet, isDesktop };
}
