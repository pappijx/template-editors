import { useState } from "react";
import PropertyPanel from "../common/PropertyPanel";

const Image = ({ styles, value }: any) => {
  return (
    <div style={{ display: "flex", ...styles }}>
      <img
        src={value ? value : "https://via.placeholder.com/150"}
        alt=""
        width="100%"
        height="200px"
      />
    </div>
  );
};

export default Image;
