import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    if (window) {
      window.document.addEventListener("mousemove", mouseMoveEvent);
      window.document.addEventListener("scroll", mouseMoveEvent);

      return () => {
        window.document.removeEventListener("mousemove", mouseMoveEvent);
        window.document.removeEventListener("scroll", mouseMoveEvent);
        cancelAnimationFrame(requestRef.current);
      };
    }
  }, []);

  const mouseMoveEvent = (e) => {
    cursorDot.current.style.top = e.clientY + "px";
    cursorDot.current.style.left = e.clientX + "px";
    cursorOutline.current.style.top = e.clientY + "px";
    cursorOutline.current.style.left = e.clientX + "px";
  };

  return (
    <>
      <div ref={cursorDot} className="cursor"></div>
      <div ref={cursorOutline} className="cursor-effect"></div>
    </>
  );
}
