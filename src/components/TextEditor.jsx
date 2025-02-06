import React from 'react'
import ToolBar from "./ToolBar"
import TextArea from "./TextArea"
import snoopyWrites from "../assets/snoopy_writes.jpg"
import { Slate } from 'slate-react'

const TextEditor = ({ editor, initialValue, renderElement, renderLeaf }) => {
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <section id="text-editor" className="flex w-screen h-screen bg-gray-50 overflow-hidden">
        <section className="w-[80%] overflow-y-auto flex justify-center items-start p-12 bg-gray-50">
          <TextArea renderElement={renderElement} renderLeaf={renderLeaf}/>
        </section>

        <section
          id="format-palette"
          className="h-screen w-[20vw] fixed right-0 top-0 flex flex-col items-start justify-start bg-white shadow-lg"
        >
          <img src={snoopyWrites} alt="snoopy-writes-banner" className="w-[15vw] mt-4" />
          <ToolBar editor={editor}/>
        </section>
      </section>
    </Slate>
  )
}

export default TextEditor
