import { IElementsHTML } from "../../Elements";
import { FormGroup, Label } from "./style";

interface IPropertyPanelELementBased {
  paneltype: string;
  onChange: (data?: any) => void;
  elementProperties: IElementsHTML;
}

export const PropertyPanelELementBased = ({
  paneltype,
  onChange,
  elementProperties,
}: IPropertyPanelELementBased) => {
  switch (paneltype) {
    case "image":
      return (
        <FormGroup>
          <Label>Enter image url</Label>
          <input
            type="text"
            value={elementProperties.value}
            onChange={onChange}
            data-function="url"
          ></input>
        </FormGroup>
      );
      break;
    case "text":
      return (
        <FormGroup>
          <Label>Enter content for text</Label>
          <textarea
            value={elementProperties.value}
            onChange={onChange}
            data-function="textValue"
          ></textarea>
        </FormGroup>
      );
      break;
    case "wrapper":
      return (
        <>
          <FormGroup>
            <Label>Enter number of columns</Label>
            <input
              value={elementProperties.value}
              onChange={onChange}
              data-function="number_of_columns"
            ></input>
          </FormGroup>
          <FormGroup>
            <Label>Enter col gap</Label>
            <input
              value={elementProperties.attributes.gap}
              onChange={onChange}
              data-function="gap_in_column"
            ></input>
          </FormGroup>
        </>
      );
      break;

    default:
      return <div>nothing</div>;
      break;
  }
};
