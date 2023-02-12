import React, { useState } from "react";
import PopOver from "../PopOver";
import "./GridLayout.css";

function GridLayout({ items = [], onItemClick, renderItemActions = null }) {
  return (
    <div className="GridLayout--Container">
      {items.map((item) => (
        <GridItem
          key={item.id}
          item={item}
          onItemClick={onItemClick}
          renderItemActions={renderItemActions}
        />
      ))}
    </div>
  );
}

export default GridLayout;

function GridItem({ item, onItemClick, renderItemActions }) {
  const [popOverOpen, setPopOverOpen] = useState(false);
  const { image, imageUrl = image } = item;

  return (
    <div
      className="GridLayout--Item"
      onClick={(event) => onItemClick(item, event)}
      style={{
        cursor: onItemClick ? "pointer" : "auto",
      }}
    >
      <img
        src={imageUrl}
        crossOrigin="anonymous"
        className="GridLayout--Image"
      />
      {!!renderItemActions && (
        <div className="GridLayout--Actions">
          <PopOver
            open={popOverOpen}
            setOpen={setPopOverOpen}
            style={{
              top: "25px",
            }}
            button={
              <button
                className="regular-button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setPopOverOpen(true);
                }}
              >
                ...
              </button>
            }
          >
            <div
              className="GridLayout--Action--Content"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              {typeof renderItemActions === "function" &&
                renderItemActions(item, () => setPopOverOpen(false))}
            </div>
          </PopOver>
        </div>
      )}
    </div>
  );
}
