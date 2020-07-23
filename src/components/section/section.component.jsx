import React from "react";

import Input from "../input/input.component";

import "./section.styles.scss";

const Section = ({ header, items, columns, itemIndex, changeValue}) => (
  <div className="our-section">
    <h2 className="title">{header}</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {items.map(({ ...itemData }, index) =>
        itemData.type === "currency" ? (
          <Input key={index} {...itemData} itemIndex={itemIndex} subItemIndex={index} changeValue={changeValue}/>
        ) : itemData.type === "input" ? (
          <Input key={index} {...itemData} itemIndex={itemIndex} subItemIndex={index} changeValue={changeValue}/>
        ) : null
      )}
    </div>
  </div>
);

export default Section;
