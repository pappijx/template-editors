import React from "react";

const TextEditor = ({ styles, value }: any) => {
  return (
    <div style={{ ...styles }}>
      {value ? value : "Some text that will help you grow"}
    </div>
  );
};

export default TextEditor;
