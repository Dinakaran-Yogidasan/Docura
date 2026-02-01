import { useState, useEffect } from "react";

export const useClipboard = (duration = 2000) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), duration);
      return () => clearTimeout(timer);
    }
  }, [copied, duration]);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      return true;
    } catch (error) {
      console.error("Copy failed", error);
      return false;
    }
  };

  return { copied, copy };
};
