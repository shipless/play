// Button.stories.ts | Button.stories.tsx

import React from "react"
// import { Meta } from "@storybook/react";
import EditorPreview from "./index"
import initialContent from "./initialContent"

const value1 = {
  html: initialContent.html,
  css: initialContent.css,
  javascript: initialContent.javascript
}

export default {
  component: EditorPreview,
  title: "Shipless",
}

export const Play: React.VFC<{}> = () => (
  <EditorPreview
    defaultValue={value1}
  />
);
export const Play2: React.VFC<{}> = () => (
  <EditorPreview
    defaultValue={value1}
  />
);