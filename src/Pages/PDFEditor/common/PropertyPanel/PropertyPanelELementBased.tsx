import { IElementsHTML } from "../../Elements";
import { FormGroup, Label } from "./style";

interface IPropertyPanelELementBased {
  paneltype: string;
  onChange: (data: any) => void;
  elementProperties: IElementsHTML;
}

export const PropertyPanelELementBased = ({
  paneltype,
  onChange,
  elementProperties,
}: any) => {
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

    default:
      return <div>nothing</div>;
      break;
  }
};
