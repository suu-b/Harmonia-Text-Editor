import React from 'react'
import { Provider } from "react-redux";

import store from './store/store'

import { createMyEditor } from '@/api/createEditor'
import { renderBlock } from '@/api/render/renderBlock'
import { renderLeaf } from '@/api/render/renderLeaf'

import TextEditor from '@/example/TextEditor'

/**
 * The main component that renders the text editor and provides the redux store to maintain the state.
 * @returns {JSX.Element}
 */
const Pilot = () => {
  const editor = createMyEditor()
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'Write from here...' }],
    },
  ]

  return (
    <Provider store={store}>
      <TextEditor editor={editor} initialValue={initialValue} renderBlock={renderBlock} renderLeaf={renderLeaf}/>
    </Provider>
  )
}

export default Pilot