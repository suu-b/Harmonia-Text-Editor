import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const TextArea = () => {
    return (
        <Editable className="px-24 py-12 w-[794px] h-[1123px] m-auto bg-white shadow-lg border border-gray-200 rounded" />
    )
}

export default TextArea