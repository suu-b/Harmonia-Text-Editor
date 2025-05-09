import { Editor, Transforms } from "slate"
import { ReactEditor } from "slate-react"

import { CodeBlock, Heading1, Heading2, Heading3, Paragraph } from "../blocks"

/**
 * Inserts the heading1 block in the editor.
 * @param {Editor} editor the editor instance
 */
export const insertHeading1 = (editor) => {
    Transforms.insertNodes(editor, Heading1)
}

/**
 * Inserts the heading2 block in the editor.
 * @param {Editor} editor the editor instance
 */
export const insertHeading2 = (editor) => {
    Transforms.insertNodes(editor, Heading2)
}

/**
 * Inserts the heading3 block in the editor.
 * @param {Editor} editor the editor instance
 */
export const insertHeading3 = (editor) => {
    Transforms.insertNodes(editor, Heading3)
}

/**
 * Inserts the paragraph block in the editor.
 * @param {Editor} editor the editor instance
 */
export const insertParagraph = (editor) => {
    Transforms.insertNodes(editor, Paragraph)
}

/**
 * Inserts the code block in the editor.
 * @param {Editor} editor the editor instance
 */
export const insertCodeBlock = (editor) => {
    Transforms.insertNodes(editor, CodeBlock)
}

/**
 * Toggles the heading1 block in the editor.
 * @param {Editor} editor the editor instance
 */
export const toggleHeading1 = (editor) => {
    Transforms.setNodes(editor, { type: Heading1.type })
}


/**
 * Toggles the heading2 block in the editor.
 * @param {Editor} editor the editor instance
 */
export const toggleHeading2 = (editor) => {
    Transforms.setNodes(editor, { type: Heading2.type })
}
/**
 * Toggles the heading3 block in the editor.
 * @param {Editor} editor the editor instance
 */
export const toggleHeading3 = (editor) => {
    Transforms.setNodes(editor, { type: Heading3.type })
}

/**
 * Toggles the paragraph block in the editor.
 * @param {Editor} editor the editor instance
 */
export const toggleParagraph = (editor) => {
    Transforms.setNodes(editor, { type: Paragraph.type })
}

/**
 * Toggles the code block in the editor.
 * @param {Editor} editor the editor instance
 */
export const toggleCodeBlock = (editor) => {
    Transforms.setNodes(editor, { type: CodeBlock.type })
}

/**
 * Toggles the borders of the selected block in the editor.
 * If the borders are already active, it will be removed.
 * If not, it will be set to the specified borders.
 * @param {Editor} editor the editor instance
 */
export const toggleBorders = (editor) => {
    if (!editor.selection) return
  
    const [match] = Editor.nodes(editor, {
      match: (n) => Editor.isBlock(editor, n) && n.type,
      mode: "lowest",
    })

    if (!match) return
    const [, path] = match
    const showBorders = !!Editor.node(editor, path)[0].showBorders
    Transforms.setNodes(editor, { showBorders: !showBorders }, { at: path })
    ReactEditor.focus(editor)

}