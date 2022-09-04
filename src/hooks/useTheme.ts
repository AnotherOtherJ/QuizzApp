import { useEffect } from "react";

const useTheme = (setIsDark: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    const darkMode = window.localStorage.getItem("darkMode");
    if (darkMode) {
      darkMode === "true" ? setIsDark(true) : setIsDark(false);
    } else {
      const checkScheme = (e: MediaQueryListEvent) =>
        e.matches ? setIsDark(true) : setIsDark(false);

      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", checkScheme);

      return () =>
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeEventListener("change", checkScheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTheme;
