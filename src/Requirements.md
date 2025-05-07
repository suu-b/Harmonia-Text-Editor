# Requirements
Consists the routines, utilities etc. that we as an application are gonna provide the client.
So, broadly, there are certain major things to be developed. Thus, the project can be divided into sections:
1. **API** or routines that we're gonna provide the client. By client, I mean the particular project who is gonna implement our package.
2. **Example/Test** So, in this same repo, i'm going to create a test/example ui in order to simulate what the client may be expecting and what all he'll get.

Now, lets ideate on the idea project structure:

```
----/src
        ---/example
            ---/components
                ---/sections
                    --- Toolbar.jsx //UI for the toolbar to dispatch styling
                ---/ui
                    ---* // ShadCn components for ui
            ---/Pilot.jsx //The pilot (a name I use to denote main files when App and Main are already used) file to render the example
            ---/TextEditor.jsx //Essentially the file where the api is called and made use of

            ---index.jsx
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
            ---createEditor.js //routine for the client to initialize an editor
            ---Editor.jsx //Component for the client to embed to make use of the api
```
  