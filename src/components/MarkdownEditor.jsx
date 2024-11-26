import React from "react";
import {
  MDXEditor,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  CreateLink,
  BlockTypeSelect,
  imagePlugin,
  InsertImage,
  linkDialogPlugin,
  linkPlugin,
  tablePlugin,
  InsertTable,
  listsPlugin,
  headingsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  InsertThematicBreak,
  ListsToggle,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";
// import "./Md.css";

const MarkdownEditor = () => {
  async function imageUploadHandler(image) {
    const formData = new FormData();
    formData.append("image", image);
    // send the file to your server and return
    // the URL of the uploaded image in the response
    const response = await fetch("/uploads/new", {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
    return json.url;
  }

  return (
    <div className="object-wrapper">
      <MDXEditor
        className="border border-slate-400 rounded-lg"
        markdown="..."
        contentEditableClassName="prose"
        imagePlugin
        plugins={[
          linkPlugin(),
          linkDialogPlugin(),
          tablePlugin(),
          listsPlugin(),
          headingsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          imagePlugin({
            imageUploadHandler,
          }),
          toolbarPlugin({
            toolbarClassName: "my-classname",
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect />
                <CreateLink />
                <InsertImage />
                <InsertTable />
                <InsertThematicBreak />
                <ListsToggle />
              </>
            ),
          }),
        ]}
      />
    </div>
  );
};

export default MarkdownEditor;
