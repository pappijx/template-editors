import React from "react";
import { Action, ActionContainer, ActionContainerWrapper } from "./style";

interface ICommonAction {
  deleteItem?: () => void;
  onClick?: () => void;
  children: any;
  active?: boolean;
  index?: any;
  handleDrop?: any;
  handleDragStart?: any;
  handleDragOver?: any;
}

const CommonActions = ({
  onClick,
  deleteItem,
  children,
  active,
  index,
  handleDragStart,
  handleDragOver,
  handleDrop,
}: ICommonAction) => {
  return (
    <ActionContainerWrapper
      active={active}
      onClick={onClick}
      draggable
      onDragStart={(event: DragEvent) => handleDragStart(event, index)}
      onDragOver={(event: DragEvent) => handleDragOver(event)}
      onDrop={(event: DragEvent) => handleDrop(event, index)}
    >
      <ActionContainer>
        <Action onClick={deleteItem}>D</Action>
      </ActionContainer>
      {children}
    </ActionContainerWrapper>
  );
};

export default CommonActions;
