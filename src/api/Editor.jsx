import { renderBlock } from "./render/renderBlock"
import { renderLeaf } from "./render/renderLeaf"

import { Slate, Editable } from 'slate-react'

/*
 * Editor component that uses Slate.js to create a rich text editor. Wraps Slate component and Editable component.
 * @param {Object} editor - The Slate editor instance.
 * @param {Array} initialValue - The initial value of the editor.
 * @param {Function} handleTextChange - Callback function to handle text changes.
 */
const Editor = ({ editor, initialValue, handleTextChange }) => {
  return (
    <Slate
      editor={editor}
      initialValue={initialValue}
      onChange={(value) => {
        console.log("Editor value changed:", value)
        const isAstChange = editor.operations.some(
          (op) => op.type !== "set_selection"
        )
        if (isAstChange) {
          const content = JSON.stringify(value)
          console.log("Dispatching content:", content)
          handleTextChange(content)
        }
      }}
    >
      <Editable renderElement={renderBlock} renderLeaf={renderLeaf} />
    </Slate>
  )
}

export default Editor