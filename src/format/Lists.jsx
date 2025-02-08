import { Editor, Element, Transforms } from "slate"

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

export const isListActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: (n) => Element.isElement(n) && n.type === format,
    })

    return !!match
}
