import React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const BackStage = ({ children }) => {
  const demoRef = useRef(null);
  if (!demoRef.current) {
    demoRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(demoRef.current);
    return () => modalRoot.removeChild(demoRef.current);
  }, []);
  return createPortal(<div>{children}</div>, demoRef.current);
};

export default BackStage;
