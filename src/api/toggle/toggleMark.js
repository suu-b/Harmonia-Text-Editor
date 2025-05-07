import { Editor } from "slate"

/**
 * 
 * @param {Editor} editor editor instance 
 * @param {string} format format to toggle e.g. "bold", "italic", "underline", "highlight". Format is essentially an inline style.
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
 * 
 * @param {Editor} editor editor instance 
 * @param {*} format format to check e.g. "bold", "italic", "underline", "highlight". Format is essentially an inline style.
 * @returns {boolean} true if the mark is active else false
 */
export const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}