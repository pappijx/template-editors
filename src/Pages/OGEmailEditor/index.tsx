import React, { useState } from "react";
import styled from "styled-components";
import BlockElement from "./Component/BlockElement";
import ElementContainer from "./LayoutComponents/ElementContainer";
import MainPage from "./LayoutComponents/MainPage";
import { IElementsHTML } from "./Models/element";

const EditorContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const OGEmailEditor = () => {
  const [editorState, setEditorState] = useState<IElementsHTML>({
    type: "page",
    attributes: {},
    children: [],
    data: {
      value: {
        content: "",
      },
    },
  });

  return (
    <EditorContainer>
      <ElementContainer />
      <MainPage
        setEditorState={setEditorState}
        currentEditorState={editorState}
      />
    </EditorContainer>
  );
};

export default OGEmailEditor;
