import React from "react";

import "./form.styles.scss";

import Section from "../section/section.component";

const Form = ({ name, items, changeValue }) => (
  <div className="our-form">
    <div className="our-form-header">
      <button className="btn-cancel">Cancel</button>
      <h1 className="title">{name}</h1>
      <button className="btn-save">Save</button>
    </div>
    {items.map(({ ...sectionData }, index) => (
      <Section key={index} {...sectionData} changeValue={changeValue} itemIndex={index}/>
    ))}
  </div>
);

export default Form;
