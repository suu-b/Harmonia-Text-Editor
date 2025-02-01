import { useState } from "react"

const WithCustomBlocks = (editor) => {
    const { isBlock, normalizeNode } = editor

    editor.isBlock = (element) => {
        if (element.type == 'Heading') {
            return true
        }
        return isBlock(element)
    }

}