import { Editor, Transforms, Element } from "slate"

/**
 * Toggle the alignment of the selected text in the editor.
 * @param {Editor} editor the editor instance
 * @param {string} alignment the alignment to toggle e.g. "left", "center", "right", "justify"
 */
export const toggleAlignment = (editor, alignment) => {
    const isActive = isAlignmentActive(editor, alignment)

    const newProperties = {
        align: isActive ? undefined : alignment,
    }

    Transforms.setNodes(editor, newProperties, { match: (n) => Element.isElement(n) })
}

/**
 * Check if the specified alignment is active or not 
 * @param editor the editor instance
 * @param alignment the alignment to toggle e.g. "left", "center", "right", "justify"
 * @returns {boolean} true if the alignment is active else false
 */
export const isAlignmentActive = (editor, alignment) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => Element.isElement(n) && n.align === alignment,
  })
  return !!match
}
