import { useEffect, useState } from "react";

const useWindow = () => {
  const [size, setsize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const updatesize = () => {
      setsize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updatesize);

    return () => window.removeEventListener("resize", updatesize);
  }, []);

  return {
    width: size[0],
    height: size[1],
  };
};

export default useWindow;
