import { DragEvent, useRef, useState, useEffect } from "react";
import { ElementsHTML, IElementsHTML } from "./Elements";
import TextEditor from "./Components/TextEditor";
import Image from "./Components/Image";
import {
  DraggedItemTile,
  EditorContainer,
  ElementsPanel,
  PdfeditorContainer,
} from "./styles";
import { Mjml, MjmlBody, MjmlHead, MjmlTitle, MjmlTable } from "mjml-react";
import CommonActions from "./common/CommonActions";
import PropertyPanel from "./common/PropertyPanel";
import { PropertyPanelELementBased } from "./common/PropertyPanel/PropertyPanelELementBased";

const Pdfeditor = () => {
  const canvasRef = useRef<HTMLHtmlElement>(null);
  const [droppedElementList, setDroppedElementList] = useState<IElementsHTML[]>(
    []
  );
  const [activeElement, setActiveElement] = useState(0);
  const [hoveredElementInEditor, setHoveredElementInEditor] = useState(-1);

  const onDragStartElement = (event: any) => {
    const dataToSend = event.currentTarget.getAttribute("data");
    event.dataTransfer.setData("application/json", dataToSend);
  };

  const onDragEndElement = (event: DragEvent) => {
    event.currentTarget.classList.remove("dragging");
  };

  // container
  const onDragOverContainer = (event: DragEvent) => {
    event.stopPropagation();
    event.preventDefault();
    event.currentTarget.classList.add("bgColorGray");
  };

  const onDropContainer = (event: DragEvent) => {
    event.stopPropagation();
    const dataRecievedAfterDrop: any = JSON.parse(
      event.dataTransfer.getData("application/json")
    );
    event.currentTarget.classList.remove("bgColorGray");

    setDroppedElementList(() => {
      return [...droppedElementList, dataRecievedAfterDrop];
    });
  };

  const onDragLeaveContainer = (event: DragEvent) => {
    event.currentTarget.classList.remove("bgColorGray");
  };

  const addedElementList: any = {
    text: TextEditor,
    image: Image,
  };

  const deleteItem = (itemIndexInDroppedElementList: number) => {
    console.log(itemIndexInDroppedElementList);

    const arrayAfterElementDelete = [...droppedElementList];
    arrayAfterElementDelete.splice(itemIndexInDroppedElementList, 1);
    setDroppedElementList(arrayAfterElementDelete);
  };

  const onChange = (e: any) => {
    const newArrayWithPropetyForActiveElement = [...droppedElementList];
    switch (e.target.getAttribute("data-function")) {
      case "url":
        newArrayWithPropetyForActiveElement[activeElement] = {
          ...newArrayWithPropetyForActiveElement[activeElement],
          value: e.target.value,
        };
        setDroppedElementList(() => newArrayWithPropetyForActiveElement);
        break;
      case "textValue":
        newArrayWithPropetyForActiveElement[activeElement] = {
          ...newArrayWithPropetyForActiveElement[activeElement],
          value: e.target.value,
        };
        setDroppedElementList(() => newArrayWithPropetyForActiveElement);
        break;

      default:
        break;
    }
  };

  const activeUiElement = (e: any) => {
    setActiveElement(e);
  };

  const onDragMoveElementInSideEditor = (e: DragEvent, element: any) => {
    console.log(hoveredElementInEditor);
    const newRearrangedArray = [...droppedElementList];
    if (hoveredElementInEditor > -1) {
      console.log("inside");
      newRearrangedArray.splice(hoveredElementInEditor, 0, JSON.parse(element));
      console.log("new rearragenge", newRearrangedArray);

      deleteItem(activeElement);
    }

    setDroppedElementList(() => newRearrangedArray);
  };

  return (
    <PdfeditorContainer>
      <ElementsPanel>
        {ElementsHTML.map((element, index: number) => {
          return (
            <DraggedItemTile
              draggable
              onDragStart={onDragStartElement}
              onDragEnd={onDragEndElement}
              id={element.tagName}
              data={JSON.stringify(element)}
              key={index}
            >
              {element.tagName}
            </DraggedItemTile>
          );
        })}
      </ElementsPanel>
      <EditorContainer
        onDragOver={onDragOverContainer}
        onDrop={onDropContainer}
        onDragLeave={onDragLeaveContainer}
        ref={canvasRef}
        id="parent"
      >
        {droppedElementList?.map((element: IElementsHTML, index: number) => {
          const Component = addedElementList[element.element_id];
          return (
            <CommonActions
              onClick={() => activeUiElement(index)}
              deleteItem={() => deleteItem(index)}
              active={activeElement === index}
              key={index}
              index={index}
              element={JSON.stringify(element)}
              onDragMoveElementInSideEditor={onDragMoveElementInSideEditor}
              onDragOver={setHoveredElementInEditor}
            >
              <Component styles={element.attributes} value={element.value} />
            </CommonActions>
          );
        })}
      </EditorContainer>
      <PropertyPanel>
        <PropertyPanelELementBased
          paneltype={droppedElementList[activeElement]?.element_id}
          elementProperties={droppedElementList[activeElement]}
          onChange={onChange}
        />
      </PropertyPanel>
    </PdfeditorContainer>
  );
};

export default Pdfeditor;
