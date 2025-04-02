import { useState, useRef, useEffect } from "react";
import "quill/dist/quill.snow.css";
import Editor from "./editor";

export function TextEditor() {
  const [value, setValue] = useState("");

  const quillRef = useRef();

  useEffect(() => {
    if (value) {
      console.log(value);
    }
  }, [value]);

  // return <ReactQuill style={{ height: "50%", width: "100%" }} theme="snow" value={value} onChange={setValue} />;
  return (
    <Editor
      ref={quillRef}
      readOnly={false}
      defaultValue={null}  // Set the default value
      onTextChange={(text) => setValue(text)}
      />
  )
}
