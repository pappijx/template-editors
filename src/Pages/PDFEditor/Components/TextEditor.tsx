import React from "react";
import { IElementsHTML } from "../Elements";

const TextEditor = ({ element }: { element: IElementsHTML }) => {
  const { attributes, value, children } = element
  return (
    <div style={{ ...attributes }}>
      {value ? value : "Some text that will help you grow"}
    </div>
  );
};

export default TextEditor;
