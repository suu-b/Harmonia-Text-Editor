import React from "react"
import ToolBar from "./ToolBar"
import TextArea from "./TextArea"
import { Slate } from "slate-react"
import { useDispatch } from "react-redux"
import { setText } from "../store/editorslice"

const TextEditor = ({ editor, initialValue, renderElement, renderLeaf }) => {
  const dispatch = useDispatch()

  const handleTextChange = (newValue) => dispatch(setText(newValue))

  return (
    <Slate 
      editor={editor} 
      initialValue={initialValue} 
      onChange={value => {
        const isAstChange = editor.operations.some(
          op => 'set_selection' !== op.type
        )
        if (isAstChange) {
          const content = JSON.stringify(value)
          handleTextChange(content)
        }
      }}
    >
      <section id="text-editor" className="flex flex-col w-screen h-screen bg-gray-100 overflow-hidden">
        <ToolBar editor={editor} />
        <section className="flex-1 w-full p-12 bg-white shadow-md rounded-lg overflow-y-auto">
          <TextArea renderElement={renderElement} renderLeaf={renderLeaf} editor={editor} />
        </section>
      </section>
    </Slate>
  )
}

export default TextEditor
