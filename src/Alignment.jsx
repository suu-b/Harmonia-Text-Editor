import { Editor, Transforms, Element } from "slate"

export const toggleAlignment = (editor, alignment) => {
    const isActive = isAlignmentActive(editor, alignment)

    const newProperties = {
        align: isActive ? undefined : alignment,
    }

    Transforms.setNodes(editor, newProperties, { match: (n) => Element.isElement(n) })
}

export const isAlignmentActive = (editor, alignment) => {
    const [match] = Editor.nodes(editor, {
        match: (n) => Element.isElement(n) && n.align === alignment,
    })
    return !!match
}
