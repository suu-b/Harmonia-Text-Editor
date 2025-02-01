import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import TextEditor from './components/TextEditor'

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

const App = () => {
  const [editor] = useState(() => withReact(createEditor()))
  return <Slate editor={editor} initialValue={initialValue}>
    <TextEditor />
  </Slate>
}


export default App