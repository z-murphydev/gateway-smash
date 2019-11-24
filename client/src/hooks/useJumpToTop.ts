import { useEffect } from "react";

export const useJumpToTop = (target: any) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [target]);
};
