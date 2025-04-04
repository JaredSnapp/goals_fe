import { useState, useRef, useEffect } from "react";
import "quill/dist/quill.snow.css";
import Editor from "./editor";
import Tiptap from "./tiptap";

export function TextEditor() {
  const [value, setValue] = useState("");

  const quillRef = useRef();

  useEffect(() => {
    if (value) {
      // console.log(value);
    }
  }, [value]);

  function saveText(value: any) {
    let x = JSON.stringify(value);
    console.log(x);
  }

  // return <ReactQuill style={{ height: "50%", width: "100%" }} theme="snow" value={value} onChange={setValue} />;
  return (
    // <Editor
    //   ref={quillRef}
    //   readOnly={false}
    //   defaultValue={null}  // Set the default value
    //   onTextChange={(text) => saveText(text)}
    //   />
      <Tiptap />
  )
}
