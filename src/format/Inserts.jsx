import { Transforms } from "slate"
import { Heading1, Heading2, Heading3, Paragraph } from "../Elements"

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
