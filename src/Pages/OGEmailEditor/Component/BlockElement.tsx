import React, { useState } from "react";
import { IElementsHTML } from "../Models/element";
import TextInput from "./TextInput";
const displayElementList: any = {
  text: TextInput,
};
function BlockElement() {
  const [elementsForBlock, setElementsForBlock] = useState<any[]>([]);
  function ArrangeDragStart(event: DragEvent, index: any) {
    event.dataTransfer?.setData("text/plain", index);
  }

  function ArrangeDragOver(event: DragEvent) {
    event.preventDefault();
  }

  function ArrangeDrop(event: DragEvent, index: any) {
    console.log(event.dataTransfer);

    const itemIndex = event.dataTransfer?.getData("text/plain");
    if (itemIndex) {
      const newItems = [...elementsForBlock];
      newItems.splice(index, 0, newItems.splice(Number(itemIndex), 1)[0]);
      setElementsForBlock(newItems);
    }
  }

  function ContainerDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  function ContainerDrop(event: DragEvent) {
    event.stopPropagation();
    const recievedData =
      event.dataTransfer?.getData("application/json") &&
      JSON.parse(event.dataTransfer?.getData("application/json"));
    setElementsForBlock((prev: any[]) => [...prev, recievedData]);
  }

  return (
    <div
      onDragOver={(event: any) => ContainerDragOver(event)}
      onDrop={(event: any) => ContainerDrop(event)}
    >
      hello
      {elementsForBlock.map((element: IElementsHTML, index: number) => {
        const Component = element?.type && displayElementList[element?.type];
        return (
          <div
            key={index}
            draggable={true}
            onDragStart={(event: any) => ArrangeDragStart(event, index)}
            onDragOver={(event: any) => ArrangeDragOver(event)}
            onDrop={(event: any) => ArrangeDrop(event, index)}
          >
            hello
            <Component />
          </div>
        );
      })}
    </div>
  );
}

export default BlockElement;
