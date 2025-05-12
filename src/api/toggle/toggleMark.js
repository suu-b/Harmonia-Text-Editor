import { Editor } from "slate"

/**
 * Toggles the specified mark (inline style) in the editor.
 * @param {Editor} editor editor instance 
 * @param {string} format format to toggle e.g. "bold", "italic", "underline", "highlight"
 */
export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

/**
 * Checks if the specified mark is active.
 * @param {Editor} editor editor instance 
 * @param {string} format format to check e.g. "bold", "italic", "underline", "highlight"
 * @returns {boolean} true if the mark is active else false
 */
export const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}