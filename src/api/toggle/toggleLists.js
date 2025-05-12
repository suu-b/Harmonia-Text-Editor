import { Editor, Element, Transforms } from "slate"

/**
 * Toggles the list block in the editor.
 * @param {Editor} editor the editor instance
 * @param {string} format the format to toggle e.g. "bulleted-list", "numbered-list"
 */
export const toggleList = (editor, format) => {
    const isActive = isListActive(editor, format)
    const isList = format === "bulleted-list" || format === "numbered-list"

    Transforms.unwrapNodes(editor, {
        match: (n) =>
            Element.isElement(n) &&
            (n.type === "bulleted-list" || n.type === "numbered-list"),
        split: true,
    })

    const newProperties = {
        type: isActive ? "paragraph" : isList ? "list-item" : format,
    }
    Transforms.setNodes(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

/**
 * Check if the specified list type is active or not
 * @param {Editor} editor the editor instance
 * @param {string} format the format to check e.g. "bulleted-list", "numbered-list"
 * @returns {boolean} true if the list is active else false
 */
 const isListActive = (editor, format) => {
    const [match] = Editor.nodes(editor, { 
        match: (n) => Element.isElement(n) && n.type === format,
    })

    return !!match
}
