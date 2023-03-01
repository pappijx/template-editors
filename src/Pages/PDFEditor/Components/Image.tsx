import { IElementsHTML } from "../Elements";

const Image = ({ element }: { element: IElementsHTML }) => {
  const { attributes, value, children } = element
  return (
    <div style={{ display: "flex", ...attributes }}>
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
