import { Slate, Editable } from 'slate-react'

/** 
 * Editor component that uses Slate.js to create a rich text editor. Wraps Slate component and Editable component.
 * @param {Object} editor - The Slate editor instance.
 * @param {Array} initialValue - The initial value of the editor.
 * @param {Function} handleTextChange - Callback function to handle text changes.
 * @param {function} renderBlock function to render the block elements
 * @param {function} renderLeaf function to render the leaf elements
 */
const Editor = ({ editor, initialValue, handleTextChange, renderBlock, renderLeaf }) => {
  return (
    <Slate
      editor={editor}
      initialValue={initialValue}
      onChange={(value) => {
        const isAstChange = editor.operations.some(
          (op) => op.type !== "set_selection"
        )
        if (isAstChange) {
          const content = JSON.stringify(value)
          handleTextChange(content)
        }
      }}
    >
      <Editable renderElement={renderBlock} renderLeaf={renderLeaf} />
    </Slate>
  )
}

export default Editor