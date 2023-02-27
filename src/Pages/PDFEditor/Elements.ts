export interface IElementsHTML {
  element_id: string;
  tagName: string;
  attributes?: object;
  children?: any[];
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
];
