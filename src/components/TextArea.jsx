import React, { useRef } from "react"
import { Editable } from "slate-react"
import { Transforms, Editor, Node } from "slate"
import * as Alignment from "../format/Alignment"
import * as Inserts from "../format/Inserts"
import * as Marks from "../format/Marks"
import * as Lists from "../format/Lists"

const TextArea = ({ editor, renderElement, renderLeaf }) => {

  const handleKeys = (e) => {
    const { selection } = editor

    if (e.ctrlKey && e.altKey && e.key === "Backspace") {
      if (selection && Editor.isStart(editor, selection.anchor, selection.anchor.path)) {
        const [node, path] = Editor.node(editor, selection.anchor.path)

        if (Editor.isBlock(editor, node) && Node.string(node) === "") {
          e.preventDefault()

          const parentBlock = Editor.above(editor, { match: (n) => Editor.isBlock(editor, n) })
          const isLastBlock = Editor.isEnd(editor, selection.focus, path)

          if (parentBlock && !isLastBlock) {
            Transforms.removeNodes(editor)
          } else {
            Transforms.setNodes(editor, { type: "paragraph", children: [{ text: "" }] })
          }
        }
      }
    }
    else if (e.ctrlKey) {
      switch (e.key) {
        case "b":
          e.preventDefault()
          Marks.toggleMark(editor, "bold")
          break
        case "i":
          e.preventDefault()
          Marks.toggleMark(editor, "italic")
          break
        case "u":
          e.preventDefault()
          Marks.toggleMark(editor, "underline")
          break
        case "`":
          e.preventDefault()
          Inserts.insertCodeBlock(editor)
          break
        default:
          break
      }
    } else if (e.shiftKey) {
      switch (e.key) {
        case "Enter":
          e.preventDefault()
          Transforms.insertText(editor, "\n")
          break
        case "Tab":
          e.preventDefault()
          Lists.outdentList(editor)
          break
        default:
          break
      }
    }
  }


  return (
    <Editable
      renderElement={renderElement}
      renderLeaf={renderLeaf}
      onKeyDown={handleKeys}
      className="px-24 py-12 pb-24 min-h-[1123px] m-auto bg-white shadow-lg focus:ring-0 shadow-none focus:shadow-none focus:outline-none"
    />
  )

}

export default TextArea
