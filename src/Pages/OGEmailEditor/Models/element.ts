export interface Value {
  content?: string;
}

export interface Data {
  value?: Value;
}

export interface Attributes {
  padding?: string;
  align?: string;
  color?: string;
}

export interface IElementsHTML {
  type?: string;
  data?: Data;
  attributes?: Attributes;
  children?: any[];
}
