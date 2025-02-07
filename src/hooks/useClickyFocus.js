import { useEffect } from "react";

export function useClickyMount(name) {
  useEffect(() => {
    if (window.clickyReady && window.clicky) {
      window.clicky.log(name, "mount");
    }
  }, []);
}
