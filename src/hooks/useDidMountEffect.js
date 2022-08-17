import { useEffect, useRef } from "react";

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      console.log("그후 렌더링!");
      func();
    } else {
      console.log("첫 렌더링!");
      didMount.current = true;
    }
  }, deps);
};

export default useDidMountEffect;
