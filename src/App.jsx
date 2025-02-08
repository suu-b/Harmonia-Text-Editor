import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, withReact } from 'slate-react'
import TextEditor from './components/TextEditor'
import { renderElement } from './render/RenderElement'
import { renderLeaf } from './render/RenderLeaf'

const App = () => {
  const [editor] = useState(() => withReact(createEditor()))

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]

  return (
    <TextEditor editor={editor} initialValue={initialValue} renderElement={renderElement} renderLeaf={renderLeaf} />
  )
}

export default App