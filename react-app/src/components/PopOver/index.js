import React, { useRef } from "react";
import "./PopOver.css";

function PopOver({ open, setOpen, button, children, style }) {
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
              event.preventDefault();

              if (event.target === backdropRef.current) {
                setOpen(false);
              }
            }}
          />
          <div
            style={style}
            className="PopOver--Card"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export default PopOver;
