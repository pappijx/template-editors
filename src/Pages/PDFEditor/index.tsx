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
import Wrapper from "./Components/Wrapper";

const Pdfeditor = () => {
  const canvasRef = useRef<HTMLHtmlElement>(null);
  const [droppedElementList, setDroppedElementList] = useState<IElementsHTML[]>(
    []
  );
  const [activeElement, setActiveElement] = useState(0);

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
    wrapper: Wrapper
  };

  const deleteItem = (itemIndexInDroppedElementList: number) => {
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
      case "number_of_columns":
        newArrayWithPropetyForActiveElement[activeElement] = {
          ...newArrayWithPropetyForActiveElement[activeElement],
          value: e.target.value,
        };
        setDroppedElementList(() => newArrayWithPropetyForActiveElement);
        break;
      case "gap_in_column":
        newArrayWithPropetyForActiveElement[activeElement] = {
          ...newArrayWithPropetyForActiveElement[activeElement],
          attributes: {
            ...newArrayWithPropetyForActiveElement[activeElement].attributes,
            gap: e.target.value
          },
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

  function handleDragStart(event: DragEvent, index: any) {
    event.dataTransfer.setData("text/plain", index);
    setActiveElement(index);
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  function handleDrop(event: DragEvent, index: any) {
    event.stopPropagation();
    if (droppedElementList[index].element_id !== 'wrapper') {
      const itemIndex = event.dataTransfer.getData("text/plain");
      const newItems: any = [...droppedElementList];
      newItems.splice(index, 0, newItems.splice(itemIndex, 1)[0]);
      setDroppedElementList(() => newItems);
    }
  }

  function handleWrapperDragOver(event: DragEvent) {
    event.preventDefault();
  }

  function handleWrapperDrop(event: DragEvent, index: any) {
    event.stopPropagation();
    console.log('hello');
    const dataRecievedAfterDrop: any = JSON.parse(
      event.dataTransfer.getData("application/json")
    );

    const newArray = [...droppedElementList]
    newArray[index].children?.push(dataRecievedAfterDrop)

    setDroppedElementList(() => newArray);
  }

  const updateEditor = (newEditorStateArray: any, index: number) => {
    const newUpdatedEditorState = [...droppedElementList]
    newUpdatedEditorState[index].children = newEditorStateArray
    setDroppedElementList(() => newUpdatedEditorState)
  }

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
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            >
              <Component element={element}
                handleWrapperDrop={handleWrapperDrop}
                handleWrapperDragOver={(event: DragEvent) => handleWrapperDragOver(event)}
                index={index}
                updateEditor={updateEditor} />
            </CommonActions>
          );
        })}
      </EditorContainer>
      {droppedElementList[activeElement]?.element_id !== 'wrapper' && <PropertyPanel>
        <PropertyPanelELementBased
          paneltype={droppedElementList[activeElement]?.element_id}
          elementProperties={droppedElementList[activeElement]}
          onChange={onChange}
        />
      </PropertyPanel>}
    </PdfeditorContainer>
  );
};

export default Pdfeditor;
