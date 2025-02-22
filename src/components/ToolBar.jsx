import { useEffect, useState } from "react"
import { FaLink, FaCode } from "react-icons/fa"
import { GrTextAlignLeft, GrTextAlignCenter, GrTextAlignRight, GrTextAlignFull } from "react-icons/gr"
import { GoListOrdered, GoListUnordered } from "react-icons/go"
import { BsBorderOuter } from "react-icons/bs"
import { Transforms, Editor } from "slate"
import { ReactEditor } from "slate-react"

import * as Alignment from "../format/Alignment"
import * as Inserts from "../format/Inserts"
import * as Marks from "../format/Marks"
import * as Lists from "../format/Lists"

const ToolBar = ({ editor }) => {
    const [formatState, setFormatState] = useState({
        bold: false,
        italic: false,
        underline: false,
    })

    useEffect(() => {
        const updateFormatState = () => {
            setFormatState({
                bold: Marks.isMarkActive(editor, "bold"),
                italic: Marks.isMarkActive(editor, "italic"),
                underline: Marks.isMarkActive(editor, "underline"),
            })
        }
        const { onChange } = editor
        editor.onChange = () => {
            updateFormatState()
            if (onChange) onChange()
        }

        return () => {
            editor.onChange = onChange
        }
    }, [editor])

    const toggleBorderForBlock = () => {
        if (!editor.selection) return

        const [match] = Editor.nodes(editor, {
            match: (n) => Editor.isBlock(editor, n) && n.type,
            mode: "lowest",
        })

        if (!match) return

        const [node, path] = match
        const showBorders = !!node.showBorders
        Transforms.setNodes(editor, { showBorders: !showBorders }, { at: path })
        ReactEditor.focus(editor)
    }

    return (
        <section id="tool-bar" className="bg-gray-100 p-2 rounded border border-gray-300 shadow-md flex justify-center items-center gap-2 fixed top-0 left-0 right-0 z-50">
            <select id="block-selection" className="cursor-pointer bg-white rounded px-1 py-2 border border-gray-300 shadow-sm h-10 text-sm w-[20vw]"
                onChange={(e) => {
                    const blockType = e.target.value
                    switch (blockType) {
                        case "paragraph": Inserts.insertParagraph(editor)
                            break
                        case "heading2": Inserts.insertHeading2(editor)
                            break
                        case "heading3": Inserts.insertHeading3(editor)
                            break
                        case "heading1": Inserts.insertHeading1(editor)
                            break
                        default: break
                    }
                }}>
                <option value="paragraph">Paragraph</option>
                <option value="heading1">Heading 1</option>
                <option value="heading2">Heading 2</option>
                <option value="heading3">Heading 3</option>
            </select>
            <button className={`bg-black text-white rounded px-1 py-2 h-10 w-10 flex justify-center items-center text-lg ${formatState.bold ? "mark-active" : ""}`} onClick={() => Marks.toggleMark(editor, "bold")}>B</button>
            <button className={`bg-black text-white rounded px-1 py-2 h-10 w-10 flex justify-center items-center text-lg ${formatState.italic ? "mark-active" : ""}`} onClick={() => Marks.toggleMark(editor, "italic")}><i>i</i></button>
            <button className={`bg-black text-white rounded px-1 py-2 h-10 w-10 flex justify-center items-center text-lg ${formatState.underline ? "mark-active" : ""}`} onClick={() => Marks.toggleMark(editor, "underline")}><u>U</u></button>

            <button className="bg-white shadow-sm rounded px-1 py-2 h-10 w-10 border border-gray-300 flex justify-center items-center" onClick={() => Lists.toggleList(editor, "numbered-list")}>
                <GoListOrdered />
            </button>
            <button className="bg-white shadow-sm rounded px-1 py-2 h-10 w-10 border border-gray-300 flex justify-center items-center" onClick={() => Lists.toggleList(editor, "bulleted-list")}>
                <GoListUnordered />
            </button>
            <button className="bg-white shadow-sm rounded px-1 py-2 h-10 w-10 border border-gray-300 flex justify-center items-center" onClick={() => Alignment.toggleAlignment(editor, "left")}>
                <GrTextAlignLeft />
            </button>
            <button className="bg-white shadow-sm rounded px-1 py-2 h-10 w-10 border border-gray-300 flex justify-center items-center" onClick={() => Alignment.toggleAlignment(editor, "center")}>
                <GrTextAlignCenter />
            </button>
            <button className="bg-white shadow-sm rounded px-1 py-2 h-10 w-10 border border-gray-300 flex justify-center items-center" onClick={() => Alignment.toggleAlignment(editor, "right")}>
                <GrTextAlignRight />
            </button>
            <button className="bg-white shadow-sm rounded px-1 py-2 h-10 w-10 border border-gray-300 flex justify-center items-center" onClick={() => Alignment.toggleAlignment(editor, "justify")}>
                <GrTextAlignFull />
            </button>

            <button className="bg-white shadow-sm rounded px-1 py-2 h-10 w-10 border border-gray-300 flex justify-center items-center" onClick={() => Inserts.insertCodeBlock(editor)}>
                <FaCode />
            </button>
            <button className="bg-white shadow-sm rounded px-1 py-2 h-10 w-10 border border-gray-300 flex justify-center items-center" onClick={toggleBorderForBlock}>
                <BsBorderOuter />
            </button>
            <button className="bg-white shadow-sm rounded px-1 py-2 h-10 w-10 border border-gray-300 flex justify-center items-center" onClick={() => Inserts.insertLink(editor)}>
                <FaLink />
            </button>
        </section>
    )
}

export default ToolBar
