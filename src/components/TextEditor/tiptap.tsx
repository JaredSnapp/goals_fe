// src/Tiptap.tsx
// import './styles.scss'

import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// define your extension array
const extensions = [StarterKit]

const content = '<p>Hello World!</p>'

// styles
const bubbleStyle = "bg-white shadow-sm border border-gray1 rounded-xl drop-shadow-sm flex p-[0.2rem] "
const buttonBaseStyle = "rounded-xl px-3 py-10"
const buttonStyle = buttonBaseStyle + "bg-transparent hover:bg-gray2"
const buttonActiveStyle = buttonBaseStyle + "bg-primary hover:bg-primary-contrast"

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
  })

  const onClickFocus = () => {
    // editor?.commands.focus('end')
  }

  return (
    // <div className={"bg-white border rounded p-2 m-2 "} onClick={onClickFocus}>
    <div>
      <EditorContent className={"border rounded min-h-[300px]"} editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      {/* <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
      {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className={bubbleStyle}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? buttonActiveStyle : buttonStyle }
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? buttonActiveStyle : buttonStyle}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? buttonActiveStyle : buttonStyle}
          >
            Strike
          </button>
        </div>
      </BubbleMenu>}
    </div>
  )
}

export default Tiptap


// // src/Tiptap.tsx
// import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'

// // define your extension array
// const extensions = [StarterKit]

// const content = '<p>Hello World!</p>'

// const Tiptap = () => {
//   return (
//     <EditorProvider extensions={extensions} content={content}>
//       <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
//       <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
//     </EditorProvider>
//   )
// }

// export default Tiptap