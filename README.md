# Harmonia Text Editor

## What?
Harmonia text editor is a wrapper built around [Slate.js](https://github.com/ianstormtaylor/slate) as a layer for the client to get access to the api the package offers to develop quickly a rich text editor. The idea surfaced when I was working on [Harmonia](https://github.com/suu-b/Harmonia), a workspace application deriving inspiration from Notion and Joplin. I felt the available text editors either too rigid to work upon or too loose for me to do something effectively (and quickly). Thus, I considered to develop one for myself.

## Why?
The goals are twofold:
1. To develop an easy and minimal api that I can make use of in my future projects to create text editors.
2. To learn and understand how npm packages are broadly developed from scratch [Thereby, I decided to make it public not private as a npm package].

## Structure?
Following is the project structure and the major utilities of each component:
```
----/src
        ---/example
            ---/components
                ---/sections
                    --- Toolbar.jsx //UI for the toolbar to dispatch styling
                ---/ui
                    ---* // ShadCn components for ui
            ---/Pilot.jsx //The pilot (a name I use to denote main files when App and Main are already taken) file to render the example
            ---/TextEditor.jsx //Essentially the file where the api is called and made use of
        ---index.js The entry point of the package
        ---/api
            ---/render
                    --- renderBlock.jsx //Defines how block elements be rendered.
                    --- renderLeaf.jsx //Defines how inline elements be rendered.
            ---/toggle
                    --- toggleAlignment.js //Toggles alignment i.e. Left, Center, Right, Justify
                    --- toggleBlocks.js //Toggles block elements i.e. h1, h2, h3, paragraph and code block
                    --- toggleLists.js //Toggles lists i.e. numbered list and bulleted list
                    --- toggleMark.js //Toggles inline styles i.e. Bold, Italics, Underlines and highlight
            ---blocks.js //Lists all the block elements allowed
            ---createEditor.js //Method for the client to initialize an editor
            ---Editor.jsx //Component for the client to embed to make use of the api
```
The package consists of the api directory. ```index.js``` serves as the entry to it. So, whatever is exported in ```index.js``` is what all the client can make use of. The example provided is purely demonstrative to serve as a reference and has no linkage to the api.

## Installation
```
npm install harmonia-text-editor
```

## API Guide
### createMyEditor
Client must import ```createMyEditor``` method to intialize an instance of editor as:
```
const editor = createMyEditor()
```

### HarmoniaTextEditor
```HarmoniaTextEditor``` is the component one must embed inside their layout to enable editing: For example:
```
<div
    className="w-full h-full outline-none"
    style={{
    minHeight: "100%",
    cursor: "text",
    }}
    >
    <Editor editor={editor} initialValue={initialValue} handleTextChange={handleTextChange} />
</div>
```

It expects the editor instance (we initialized earlier) and an initial value: an array of objects. This would be the boilerplate content of your text editor. For example:
```
const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'Write from here...' }],
    },
  ]
```

The following are methods that allow one to apply styles (bold, italics etc.) or insert blocks in the document (h1, h2, etc.). One can probably make a ui for a toolbar and bind the methods below with the respective keys in the ui.

### toggleAlignments
```toggleAlignments``` is packed with a method. The sole usage is to implement alignment in text: left, right, center or justify. For example:
```
toggleAlignments.toggleAlignment(editor, "left") //or center, justify, right to enable alignment
```

### toggleBlocks
```toggleBlocks``` is  packed with methods to insert block elements i.e. h1, h2, h3, paragraph or a code block.
```
toggleBlocks.toggleHeading1(editor)
toggleBlocks.toggleHeading2(editor)
toggleBlocks.toggleHeading3(editor)
toggleBlocks.toggleParagraph(editor)
toggleBlocks.toggleCodeBlock(editor)

```

### toggleLists
```toggleLists``` is packed with a method to insert lists: numbered or bulleted.
```
toggleLists.toggleList("numbered-list") 
toggleLists.toggleList("bulleted-list") 
```

### toggleMarks
```toggleMarks``` is packed with a method to implement inline styles. For example:
```
toggleMarks.toggleMark(editor, "bold") 
toggleMarks.toggleMark(editor, "italic") 
toggleMarks.toggleMark(editor, "underline") 
toggleMarks.toggleMark(editor, "highlight") 
```

For a reference of the usage of each, one can follow ```/src/example/```

## Credits
Tho the wrapper is implemented by me, I can bear no credit of creativity/technical expertise as the project is a thin wrapper around a concept materialized by [Slate](https://github.com/ianstormtaylor/slate).