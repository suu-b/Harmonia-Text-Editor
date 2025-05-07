import { createEditor } from 'slate'
import { withReact } from 'slate-react'

/**
 * Creates an editor instance for the client. Makes use of the withReact function to add React support to the editor.
 * @returns {Editor} editor instance
 */
export const createMyEditor = () => {
  return withReact(createEditor())
}
