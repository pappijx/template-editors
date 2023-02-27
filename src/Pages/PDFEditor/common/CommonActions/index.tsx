import React from "react";
import { Action, ActionContainer, ActionContainerWrapper } from "./style";

interface ICommonAction {
  deleteItem?: () => void;
  onClick?: () => void;
  children: any;
  active?: boolean;
  element?: any;
  onDragMoveElementInSideEditor?: any;
  onDragOver?: any;
  index?: any;
}

const CommonActions = ({
  onClick,
  deleteItem,
  children,
  active,
  element,
  onDragMoveElementInSideEditor,
  onDragOver,
  index,
}: ICommonAction) => {
  return (
    <ActionContainerWrapper
      active={active}
      onClick={onClick}
      draggable
      onDragStart={onClick}
      onDragOver={(event: DragEvent) => {
        event.stopPropagation();
        event.preventDefault();
        if (active !== true) {
          console.log(index, active);
          onDragOver(index);
        }
      }}
      onDrop={(event: DragEvent) => {
        event.stopPropagation();
        event.preventDefault();
        console.log("lol");
        onDragMoveElementInSideEditor(event, element);
      }}
    >
      <ActionContainer>
        <Action onClick={deleteItem}>D</Action>
      </ActionContainer>
      {children}
    </ActionContainerWrapper>
  );
};

export default CommonActions;
