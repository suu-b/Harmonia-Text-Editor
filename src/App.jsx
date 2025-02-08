import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, withReact } from 'slate-react'
import TextEditor from './components/TextEditor'
import { renderElement } from './render/RenderElement'
import { renderLeaf } from './render/RenderLeaf'
import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  const [editor] = useState(() => withReact(createEditor()))

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]

  return (
    <Provider store={store}>
      <TextEditor editor={editor} initialValue={initialValue} renderElement={renderElement} renderLeaf={renderLeaf} />
    </Provider>
  )
}

export default App