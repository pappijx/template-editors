import React, { useEffect, useState } from "react";
import BlockElement from "../Component/BlockElement";
import TextInput from "../Component/TextInput";
import { IElementsHTML } from "../Models/element";

interface IMainPage {
  setEditorState?: any;
  currentEditorState?: IElementsHTML;
}

const displayElementList: any = {
  text: TextInput,
  wrapper: BlockElement,
};

const MainPage = ({ setEditorState, currentEditorState }: IMainPage) => {
  const [mainPageElementList, setMainPageELementList] = useState<
    IElementsHTML[]
  >(() =>
    currentEditorState?.children?.length ? currentEditorState?.children : []
  );

  useEffect(() => {
    if (mainPageElementList.length) {
      setEditorState((prev: any) => ({
        ...prev,
        children: mainPageElementList,
      }));
    }
  }, [mainPageElementList]);

  const mainPageDragOver = (event: DragEvent) => {
    event.preventDefault();
  };
  const mainPageDrop = (event: DragEvent) => {
    const recievedData =
      event.dataTransfer?.getData("application/json") &&
      JSON.parse(event.dataTransfer?.getData("application/json"));
    setMainPageELementList((prev: IElementsHTML[]) => [...prev, recievedData]);
  };
  return (
    <div
      draggable={true}
      onDragOver={(event: any) => mainPageDragOver(event)}
      onDrop={(event: any) => mainPageDrop(event)}
    >
      {mainPageElementList.length &&
        mainPageElementList.map((element: IElementsHTML, index: number) => {
          const Component = element.type && displayElementList[element.type];
          return <Component key={index} />;
        })}
    </div>
  );
};

export default MainPage;
