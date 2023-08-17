import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CommonActions from '../common/CommonActions'
import PropertyPanel from '../common/PropertyPanel'
import { PropertyPanelELementBased } from '../common/PropertyPanel/PropertyPanelELementBased'
import { IElementsHTML } from '../Elements'
import Image from './Image'
import TextEditor from './TextEditor'

interface IWrapper { element: IElementsHTML, handleWrapperDrop?: any, handleWrapperDragOver?: any, index: any, updateEditor?: any }


const WrapperContainer: any = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props: any) => props.gap};
`

const addedElementList: any = {
    text: TextEditor,
    image: Image,
};
// gap={attributes?.gap}
const Wrapper = ({ element, handleWrapperDrop, handleWrapperDragOver, index, updateEditor }: IWrapper) => {
    const [droppedElementList, setDroppedElementList] = useState<IElementsHTML[]>(element.children?.length ? element.children : []);
    const [activeElement, setActiveElement] = useState(0);

    const deleteItem = (itemIndexInDroppedElementList: number) => {
        const arrayAfterElementDelete = [...droppedElementList];
        arrayAfterElementDelete?.splice(itemIndexInDroppedElementList, 1);
        setDroppedElementList(() => arrayAfterElementDelete);
    };

    const activeUiElement = (e: any) => {
        setActiveElement(() => e);
    };

    function handleDragStart(event: DragEvent, index: any) {
        event.dataTransfer?.setData("text/plain", index);
        setActiveElement(() => index);
    }

    function handleDragOver(event: DragEvent) {
        event.preventDefault();
    }

    function handleDrop(event: DragEvent, index: any) {
        event.stopPropagation();
        if (droppedElementList[index].element_id !== 'wrapper') {
            console.log(event.dataTransfer);
            const itemIndex = event.dataTransfer?.getData("text/plain");
            const newItems: any = [...droppedElementList];
            newItems.splice(index, 0, newItems.splice(itemIndex, 1)[0]);
            setDroppedElementList(() => newItems);
        }
    }


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


    useEffect(() => {
        updateEditor(droppedElementList, index)
    }, [droppedElementList])


    const { attributes, value, children } = element
    return <>
        <WrapperContainer onDragOver={handleWrapperDragOver} onDrop={(event: DragEvent) => handleWrapperDrop(event, index)} gap={attributes?.gap}>
            {children?.length ? children?.map((item: IElementsHTML, index: number) => {
                const Component = addedElementList[item.element_id]
                return <CommonActions
                    onClick={() => activeUiElement(index)}
                    deleteItem={() => deleteItem(index)}
                    active={activeElement === index}
                    key={index}
                    index={index}
                    handleDragStart={handleDragStart}
                    handleDragOver={handleDragOver}
                    handleDrop={handleDrop}
                >
                    <Component element={item} index={index} />
                </CommonActions>
            }) : 'Please drop any element here'}
        </WrapperContainer>
        {
            (droppedElementList.length && droppedElementList[activeElement]?.element_id !== 'wrapper') && <PropertyPanel>
                <PropertyPanelELementBased
                    paneltype={droppedElementList[activeElement]?.element_id}
                    elementProperties={droppedElementList[activeElement]}
                    onChange={onChange}
                />
            </PropertyPanel>
        }
    </>
}


export default Wrapper