import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, withReact } from 'slate-react'
import TextEditor from './components/TextEditor'
import { renderElement } from './Inserts'
import { renderLeaf } from './Marks'

const App = () => {
  const [editor] = useState(() => withReact(createEditor()))
  
  const initialValue = [
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
    ]

  return (
    <TextEditor editor={editor} initialValue={initialValue} renderElement={renderElement} renderLeaf={renderLeaf}/>
  )
}

export default App