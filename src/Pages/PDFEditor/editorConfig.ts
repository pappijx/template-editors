import { AdvancedType } from "easy-email-core";
import { ExtensionProps } from "easy-email-extensions";

const defaultCategories: ExtensionProps["categories"] = [
  {
    label: "Content",
    active: true,
    blocks: [
      {
        type: AdvancedType.TEXT,
      },
      {
        type: AdvancedType.IMAGE,
        payload: { attributes: { padding: "0px 0px 0px 0px" } },
      },
      {
        type: AdvancedType.BUTTON,
      },
      {
        type: AdvancedType.SOCIAL,
      },
      {
        type: AdvancedType.DIVIDER,
      },
      {
        type: AdvancedType.SPACER,
      },
      {
        type: AdvancedType.HERO,
      },
      {
        type: AdvancedType.WRAPPER,
      },
    ],
  },
  {
    label: "Layout",
    active: true,
    displayType: "column",
    blocks: [
      {
        title: "2 columns",
        payload: [
          ["50%", "50%"],
          ["33%", "67%"],
          ["67%", "33%"],
          ["25%", "75%"],
          ["75%", "25%"],
        ],
      },
      {
        title: "3 columns",
        payload: [
          ["33.33%", "33.33%", "33.33%"],
          ["25%", "25%", "50%"],
          ["50%", "25%", "25%"],
        ],
      },
      {
        title: "4 columns",
        payload: [["25%", "25%", "25%", "25%"]],
      },
      {
        title: "8 columns",
        payload: [
          [
            "12.5%",
            "12.5%",
            "12.5%",
            "12.5%",
            "12.5%",
            "12.5%",
            "12.5%",
            "12.5%",
          ],
        ],
      },
    ],
  },
];

const fontList = [
  "Arial",
  "Tahoma",
  "Verdana",
  "Times New Roman",
  "Courier New",
  "Georgia",
  "Lato",
  "Montserrat",
].map((item) => ({ value: item, label: item }));

export { defaultCategories, fontList };
