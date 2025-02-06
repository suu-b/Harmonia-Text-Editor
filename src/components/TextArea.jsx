import React from 'react'
import { Editable } from 'slate-react'

const TextArea = ({ renderElement, renderLeaf }) => {
  return (
    <Editable renderElement={renderElement} renderLeaf={renderLeaf} className="px-24 py-12 w-[794px] h-[1123px] m-auto bg-white shadow-lg border border-gray-200 rounded" />
  )
}

export default TextArea