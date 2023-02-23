import React from "react";
import { BlockManager, BasicType, AdvancedType } from "easy-email-core";
import { EmailEditor, EmailEditorProvider } from "easy-email-editor";
import { ExtensionProps, StandardLayout } from "easy-email-extensions";
import { useWindowSize } from "react-use";

import "easy-email-editor/lib/style.css";
import "easy-email-extensions/lib/style.css";

// theme, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/1799/setting/base/Color
import "@arco-themes/react-easy-email-theme/css/arco.css";
import { defaultCategories, fontList } from "./editorConfig";
import { pdfEditortemplates } from "./pdfEditorTemplates";

const initialValues = {
  subject: "Welcome to Easy-email",
  subTitle: "Nice to meet you!",
  content: BlockManager.getBlockByType(BasicType.PAGE)!.create(
    pdfEditortemplates.default
  ),
};

const Pdfeditor = () => {
  const { width } = useWindowSize();

  const smallScene = width < 1400;

  return (
    <EmailEditorProvider
      data={initialValues}
      height={"calc(100vh - 2px)"}
      autoComplete
      dashed={false}
      fontList={fontList}
    >
      {({ values }) => {
        return (
          <StandardLayout
            {...values}
            categories={defaultCategories}
            compact={!smallScene}
            showSourceCode={true}
          >
            <EmailEditor />
          </StandardLayout>
        );
      }}
    </EmailEditorProvider>
  );
};

export default Pdfeditor;
