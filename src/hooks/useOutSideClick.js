import { useEffect } from "react";

function useOutsideClick(ref, callback) {
  useEffect(() => {
    const handleMousedown = (event) => {
      // console.log("target", event.target);
      // console.log("ref", ref.current);
      // console.log("currentTarget", event.currentTarget);

      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    };

    window.addEventListener("mousedown", handleMousedown);

    return () => {
      window.removeEventListener("mousedown", handleMousedown);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
