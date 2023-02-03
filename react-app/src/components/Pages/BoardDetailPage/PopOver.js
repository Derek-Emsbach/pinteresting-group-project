import React, { useRef } from "react";
import "./PopOver.css";

function PopOver({ open, setOpen, button, children }) {
  const backdropRef = useRef();

  return (
    <div className="PopOver--Container">
      {button}
      {open && (
        <>
          <div
            ref={backdropRef}
            className="PopOver--Backdrop"
            onClick={(event) => {
              if (event.target === backdropRef.current) {
                setOpen(false);
              }
            }}
          />
          <div className="PopOver--Card">{children}</div>
        </>
      )}
    </div>
  );
}

export default PopOver;
