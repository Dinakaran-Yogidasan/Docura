import { useEffect } from "react";

export const useKeyboard = ({ onSearch, onEscape }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K or Ctrl+K for Search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        if (onSearch) {
          e.preventDefault();
          onSearch();
        }
      }

      // Escape to close
      if (e.key === "Escape") {
        if (onEscape) {
          onEscape();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSearch, onEscape]);
};
