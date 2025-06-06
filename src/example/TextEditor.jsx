import { useState } from "react"
import { useDispatch } from "react-redux"

import HarmoniaTextEditor from "@/api/HarmoniaTextEditor"
import { ToolBar } from "./components/sections/ToolBar"
import { setText } from "./store/editorslice"

/**
 * The main text editor that renders the Editor provided by api and the ToolBar.
 * @param {Editor} editor the editor instance
 * @param {Array} initialValue the initial value of the editor 
 * @param {function} renderBlock function to render the block elements
 * @param {function} renderLeaf function to render the leaf elements
 * @returns {JSX.Element}
 */
export default function TextEditor({editor, initialValue, renderBlock, renderLeaf}) {
  const [activeButtons, setActiveButtons] = useState([])
  const dispatch = useDispatch()

  const handleTextChange = (newValue) => dispatch(setText(newValue))

  const toggleButton = (buttonId) => {
    const listGroup = ["bulleted-list", "numbered-list"]
    const alignGroup = ["align-left", "align-center", "align-right", "align-justify"]
  
    if (listGroup.includes(buttonId)) {
      setActiveButtons((prev) =>
        prev.filter((id) => !listGroup.includes(id)).concat(
          prev.includes(buttonId) ? [] : [buttonId]
        )
      )
      return
    }
  
    if (alignGroup.includes(buttonId)) {
      setActiveButtons((prev) =>
        prev.filter((id) => !alignGroup.includes(id)).concat(
          prev.includes(buttonId) ? [] : [buttonId]
        )
      )
      return
    }
    if (activeButtons.includes(buttonId)) {
      setActiveButtons(activeButtons.filter((id) => id !== buttonId))
    } else {
      setActiveButtons([...activeButtons, buttonId])
    }
  }
  

  const isActive = (buttonId) => activeButtons.includes(buttonId)

  return (
    <div className="w-full max-w-[794px] mx-auto">
      <ToolBar editor={editor} toggleButton={toggleButton} isActive={isActive}/>

      <div
        className="bg-white border shadow-md w-full"
        style={{
          height: "1123px",
          padding: "48px",
          position: "relative",
          overflow: "auto",
        }}
      >
        <div
          className="w-full h-full outline-none"
          style={{
            minHeight: "100%",
            cursor: "text",
          }}
        >
          <HarmoniaTextEditor editor={editor} initialValue={initialValue} handleTextChange={handleTextChange} renderBlock={renderBlock} renderLeaf={renderLeaf}/>
        </div>
      </div>
    </div>
  )
}
