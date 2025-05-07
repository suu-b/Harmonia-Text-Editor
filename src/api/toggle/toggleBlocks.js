import { Editor, Transforms } from "slate"
import { CodeBlock, Heading1, Heading2, Heading3, Paragraph } from "../blocks"

/**
 * Toggles the heading1 block in the editor.
 * @param {Editor} editor the editor instance
 */
export const toggleHeading1 = (editor) => {
    Transforms.insertNodes(editor, Heading1)
}

/**
 * Toggles the heading2 block in the editor.
 * @param {Editor} editor the editor instance
 */
export const toggleHeading2 = (editor) => {
    Transforms.insertNodes(editor, Heading2)
}

/**
 * Toggles the heading3 block in the editor.
 * @param {Editor} editor the editor instance
 */
export const toggleHeading3 = (editor) => {
    Transforms.insertNodes(editor, Heading3)
}

/**
 * Toggles the paragraph block in the editor.
 * @param {Editor} editor the editor instance
 */
export const toggleParagraph = (editor) => {
    Transforms.insertNodes(editor, Paragraph)
}

/**
 * Toggles the code block in the editor.
 * @param {Editor} editor the editor instance
 */
export const toggleCodeBlock = (editor) => {
    Transforms.insertNodes(editor, CodeBlock)
}
