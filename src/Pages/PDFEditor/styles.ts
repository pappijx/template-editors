import styled from "styled-components";

export const PdfeditorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  background-color: #fafafa;
`;

export const ElementsPanel = styled.aside`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 20%;
  background-color: #b9b9b9;
  padding: 1rem;
`;

export const EditorContainer = styled.main`
  position: relative;
  width: 80%;
  height: 100%;
  padding-right: 25vw;
  margin: auto;
`;

export const DraggedItemTile: any = styled.div`
  height: 100px;
  width: 100px;
  background-color: white;
  border-radius: 1rem;
  display: grid;
  place-items: center;

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px black;
  }
`;
