import React from "react";
import styled from "styled-components";
import { IElementsHTML } from "../Models/element";

const BlockElementList: any = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BlockElememtsTiles: any = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const componentList: IElementsHTML[] = [
  {
    type: "wrapper",
    data: {
      value: {
        content: "",
      },
    },
    attributes: {},
    children: [],
  },
  {
    type: "text",
    data: {
      value: {
        content: "Enter sample text here",
      },
    },
    attributes: {
      color: "blue",
    },
    children: [],
  },
];

const ElementContainer = () => {
  const onDragStartElement = (event: any) => {
    const dataToSend = event.currentTarget?.getAttribute("data-element");
    event.dataTransfer?.setData("application/json", dataToSend);
  };
  const onDragEndElement = (event: DragEvent) => {};
  return (
    <BlockElementList>
      {componentList.map((element, index) => (
        <BlockElememtsTiles
          key={index}
          data-element={JSON.stringify(element)}
          draggable
          onDragStart={(event: any) => onDragStartElement(event)}
          onDragEnd={(event: any) => onDragEndElement(event)}
        >
          {element.type}
        </BlockElememtsTiles>
      ))}
    </BlockElementList>
  );
};

export default ElementContainer;
