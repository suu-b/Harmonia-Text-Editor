declare module 'harmonia-text-editor' {
    import { Editor as SlateEditor } from 'slate';
    import { ReactNode } from 'react';

    // Editor Component
    export const HarmoniaTextEditor: React.ComponentType<{
        editor: SlateEditor;
        initialValue: any[];
        handleTextChange: (content: string) => void;
        renderBlock: (props: any) => ReactNode;
        renderLeaf: (props: any) => ReactNode;
    }>;

    // Editor Initialization
    export function createMyEditor(): SlateEditor;

    // Toggle Alignment
    export namespace toggleAlignments {
        function toggleAlignment(editor: SlateEditor, alignment: string): void;
        function isAlignmentActive(editor: SlateEditor, alignment: string): boolean;
    }

    // Toggle Blocks
    export namespace toggleBlocks {
        function insertHeading1(editor: SlateEditor): void;
        function insertHeading2(editor: SlateEditor): void;
        function insertHeading3(editor: SlateEditor): void;
        function insertParagraph(editor: SlateEditor): void;
        function insertCodeBlock(editor: SlateEditor): void;

        function toggleHeading1(editor: SlateEditor): void;
        function toggleHeading2(editor: SlateEditor): void;
        function toggleHeading3(editor: SlateEditor): void;
        function toggleParagraph(editor: SlateEditor): void;
        function toggleCodeBlock(editor: SlateEditor): void;

        function toggleBorders(editor: SlateEditor): void;
    }

    // Toggle Lists
    export namespace toggleLists {
        function toggleList(editor: SlateEditor, format: string): void;
    }

    // Toggle Marks
    export namespace toggleMarks {
        function toggleMark(editor: SlateEditor, format: string): void;
        function isMarkActive(editor: SlateEditor, format: string): boolean;
    }

    // Render Functions
    export function renderBlock(props: any): ReactNode;
    export function renderLeaf(props: any): ReactNode;
}
