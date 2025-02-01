import { Transforms } from "slate"
import { Heading1, Heading2, Heading3, Paragraph } from "./Elements"

export const insertHeading1 = (editor) => {
    Transforms.insertNodes(editor, Heading1)
}
export const insertHeading2 = (editor) => {
    Transforms.insertNodes(editor, Heading2)
}
export const insertHeading3 = (editor) => {
    Transforms.insertNodes(editor, Heading3)
}
export const insertParagraph = (editor) => {
    Transforms.insertNodes(editor, Paragraph)
}

export const renderElement = (props) => {
    const { element, children, attributes } = props

    switch (element.type) {
        case 'heading1':
            return <h1 className="text-3xl font-bold" {...attributes}>{children}</h1>
        case 'heading1':
            return <h2 className="text-2xl font-bold" {...attributes}>{children}</h2>
        case 'heading1':
            return <h3 className="text-xl font-semibold" {...attributes}>{children}</h3>
        case 'heading1':
            return <p className="text-base" {...attributes}>{children}</p>
        default:
            return <p className="text-sm" {...attributes}>{children} /</p>
    }
}