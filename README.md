# Harmonia Text Editor

## What?

Harmonia text editor is a wrapper built around [Slate.js](https://github.com/ianstormtaylor/slate) as a layer for the client to get access to the api the package offers to develop quickly a basic text editor. The idea surfaced when I was working on [Harmonia](https://github.com/suu-b/Harmonia), a workspace application deriving inspiration from Notion and Joplin. I felt the available text editors either too rigid to work upon or too loose for me to do something effectively (and quickly). Thus, I considered to develop one for myself.

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
            ---/store --- Redux setup
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

The package consists of the api directory. `index.js` serves as the entry to it. So, whatever is exported in `index.js` is what all the client can make use of. The example provided is purely demonstrative to serve as a reference and has no linkage to the api.

## Installation

```
npm install harmonia-text-editor
```

## API Guide

### createMyEditor

The client must import the `createMyEditor` method to initialize an instance of the editor as:

```javascript
const editor = createMyEditor();
```

### HarmoniaTextEditor

`HarmoniaTextEditor` is the component one must embed inside their layout to enable editing. For example:

```jsx
<div
  className="w-full h-full outline-none"
  style={{
    minHeight: "100%",
    cursor: "text",
  }}
>
  <HarmoniaTextEditor
    editor={editor}
    initialValue={initialValue}
    handleTextChange={handleTextChange}
  />
</div>
```

It expects the following props:

- **`editor`**: The editor instance (initialized earlier).
- **`initialValue`**: An array of objects representing the initial content of the editor. For example:
  ```javascript
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "Write from here..." }],
    },
  ];
  ```
- **`handleTextChange`**: A callback function to handle text changes.

---

### toggleAlignment

The `toggleAlignment` module provides methods to toggle text alignment (left, center, right, justify). For example:

```javascript
toggleAlignment.toggleAlignment(editor, "left"); // or "center", "right", "justify"
```

---

### toggleBlocks

The `toggleBlocks` module provides methods to insert or toggle block elements such as headings, paragraphs, and code blocks. For example:

```javascript
// Insert blocks
toggleBlocks.insertHeading1(editor);
toggleBlocks.insertHeading2(editor);
toggleBlocks.insertHeading3(editor);
toggleBlocks.insertParagraph(editor);
toggleBlocks.insertCodeBlock(editor);

// Toggle blocks
toggleBlocks.toggleHeading1(editor);
toggleBlocks.toggleHeading2(editor);
toggleBlocks.toggleHeading3(editor);
toggleBlocks.toggleParagraph(editor);
toggleBlocks.toggleCodeBlock(editor);
```

---

### toggleLists

The `toggleLists` module provides methods to toggle list elements (numbered or bulleted). For example:

```javascript
toggleLists.toggleList(editor, "numbered-list");
toggleLists.toggleList(editor, "bulleted-list");
```

---

### toggleMark

The `toggleMark` module provides methods to toggle inline styles such as bold, italic, underline, and highlight. For example:

```javascript
toggleMark.toggleMark(editor, "bold");
toggleMark.toggleMark(editor, "italic");
toggleMark.toggleMark(editor, "underline");
toggleMark.toggleMark(editor, "highlight");
```

---

### toggleBorders

The `toggleBorders` method allows toggling borders for the selected block. For example:

```javascript
toggleBlocks.toggleBorders(editor);
```

---

### Rendering Custom Elements

To customize how blocks and inline styles are rendered, you can use the following:

#### `renderBlock`

Defines how block elements (e.g., headings, paragraphs) are rendered. For example:

```javascript
<Editor renderBlock={renderBlock} />
```

#### `renderLeaf`

Defines how inline styles (e.g., bold, italic) are rendered. For example:

```javascript
<Editor renderLeaf={renderLeaf} />
```

---

For a reference implementation of these methods, check the `/src/example/` directory.

## Credits

Tho the wrapper is implemented by me, I can bear no credit of creativity/technical expertise as the project is a thin wrapper around a concept materialized by [Slate](https://github.com/ianstormtaylor/slate).
