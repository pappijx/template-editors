export interface IElementsHTML {
  element_id: string;
  tagName: string;
  attributes?: any;
  children?: IElementsHTML[];
  value?: string;
}

export const ElementsHTML: IElementsHTML[] = [
  {
    element_id: "text",
    tagName: "Text",
    attributes: {
      color: "blue",
    },
    children: [],
    value: "",
  },
  {
    element_id: "image",
    tagName: "Image",
    attributes: {
      color: "blue",
      backgroundColor: "red",
    },
    value: "",
    children: [],
  },
  {
    element_id: "wrapper",
    tagName: "Wrapper",
    attributes: {
      color: "blue",
      backgroundColor: "red",
      gap: "0.5rem",
    },
    value: "",
    children: [],
  },
];
