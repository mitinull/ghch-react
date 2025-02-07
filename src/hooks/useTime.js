import { useEffect, useState } from "react";

export function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleFocus = () => {
      setTime(new Date());
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  return { time };
}
