import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Aos() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <></>;
}

export default Aos;
