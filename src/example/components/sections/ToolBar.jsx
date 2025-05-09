import {
    Bold,
    Italic,
    Underline,
    Highlighter,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    List,
    ListOrdered,
    Square,
    Code,
  } from "lucide-react"
  
  import { Button } from "@/example/components/ui/button"
  import { Separator } from "@/example/components/ui/separator"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/example/components/ui/select"
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/example/components/ui/tooltip"

  
  import * as toggleAlignment from "@/api/toggle/toggleAlignment"
  import * as toggleBlocks from "@/api/toggle/toggleBlocks"
  import * as toggleLists from "@/api/toggle/toggleLists"
  import * as toggleMark from "@/api/toggle/toggleMark"

  import { useState } from "react"
  
  /**
   * The toolbar component that provides the buttons to dispatch the actions to the editor to apply the respective styles.
   * @param {Editor} editor the editor instance
   * @param {function} toggleButton function to toggle the button state
   * @param {function} isActive function to check if the button is active
   * @returns 
   */
  export function ToolBar({ editor, toggleButton, isActive }) {
    const [selectedBlock, setSelectedBlock] = useState("paragraph")
  
    const handleBlockChange = (value) => {
      setSelectedBlock(value)
    
      const blockMap = {
        heading1: {
          insert: toggleBlocks.insertHeading1,
          toggle: () => toggleBlocks.toggleHeading1(editor),
        },
        heading2: {
          insert: toggleBlocks.insertHeading2,
          toggle: () => toggleBlocks.toggleHeading2(editor),
        },
        heading3: {
          insert: toggleBlocks.insertHeading3,
          toggle: () => toggleBlocks.toggleHeading3(editor),
        },
        paragraph: {
          insert: toggleBlocks.insertParagraph,
          toggle: () => toggleBlocks.toggleParagraph(editor),
        },
      }
    
      const block = blockMap[value]
      if (!block) return
    
      if (!editor.selection) {
        block.insert(editor)
      } else {
        block.toggle()
      }
    }
      
    const addCodeBlock = () => {
      toggleBlocks.toggleCodeBlock(editor)
    }
  
    const toggleBorderForBlock = () => {
      toggleBlocks.toggleBorders(editor)
    }
  
    const ControlButton = ({ icon: Icon, action, active, label }) => (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={active ? "default" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={action}
          >
            <Icon className="h-4 w-4" />
            <span className="sr-only">{label}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    )
  
    return (
      <div className="p-2 flex flex-wrap gap-1 items-center">
        <Select value={selectedBlock} onValueChange={handleBlockChange}>
          <SelectTrigger className="w-[140px] h-8">
            <SelectValue placeholder="Block Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="heading1">Heading 1</SelectItem>
            <SelectItem value="heading2">Heading 2</SelectItem>
            <SelectItem value="heading3">Heading 3</SelectItem>
            <SelectItem value="paragraph">Paragraph</SelectItem>
          </SelectContent>
        </Select>
  
        <Separator orientation="vertical" className="mx-1 h-8" />
        <TooltipProvider delayDuration={300}>
          <ControlButton
            icon={Bold}
            action={() => {
              toggleMark.toggleMark(editor, "bold") 
              toggleButton("bold")
            }}
            active={isActive("bold")}
            label="Bold"
          />
          <ControlButton
            icon={Italic}
            action={() => {
              toggleMark.toggleMark(editor, "italic") 
              toggleButton("italic")
            }}
            active={isActive("italic")}
            label="Italic"
          />
          <ControlButton
            icon={Underline}
            action={() => {
              toggleMark.toggleMark(editor, "underline")  
              toggleButton("underline")
            }}
            active={isActive("underline")}
            label="Underline"
          />
          <ControlButton
            icon={Highlighter}
            action={() => {
              toggleMark.toggleMark(editor, "highlight") 
              toggleButton("highlight")
            }}
            active={isActive("highlight")}
            label="Highlight"
          />
          <Separator orientation="vertical" className="mx-1 h-8" />
          <ControlButton
            icon={AlignLeft}
            action={() => {
              toggleAlignment.toggleAlignment(editor, "left")
              toggleButton("align-left")
            }}
            active={isActive("align-left")}
            label="Align Left"
          />
          <ControlButton
            icon={AlignCenter}
            action={() => {
              toggleAlignment.toggleAlignment(editor, "center")
              toggleButton("align-center")
            }}
            active={isActive("align-center")}
            label="Align Center"
          />
          <ControlButton
            icon={AlignRight}
            action={() => {
              toggleAlignment.toggleAlignment(editor, "right")
              toggleButton("align-right")
            }}
            active={isActive("align-right")}
            label="Align Right"
          />
          <ControlButton
            icon={AlignJustify}
            action={() => {
              toggleAlignment.toggleAlignment(editor, "justify")
              toggleButton("align-justify")
            }}
            active={isActive("align-justify")}
            label="Justify"
          />
          <Separator orientation="vertical" className="mx-1 h-8" />
          <ControlButton
            icon={List}
            action={() => {
              toggleLists.toggleList(editor, "bulleted-list")
              toggleButton("bulleted-list")
            }}
            active={isActive("bulleted-list")}
            label="Bulleted List"
          />
          <ControlButton
            icon={ListOrdered}
            action={() => {
              toggleLists.toggleList(editor, "numbered-list")
              toggleButton("numbered-list")
            }}
            active={isActive("numbered-list")}
            label="Numbered List"
          />
          <Separator orientation="vertical" className="mx-1 h-8" />
          <ControlButton
            icon={Code}
            action={() => {
              addCodeBlock()
              toggleButton("code-block")
            }}
            active={isActive("code-block")}
            label="Code Block"
          />
          <ControlButton
            icon={Square}
            action={() => {
              toggleBorderForBlock()
              toggleButton("borders")
            }}
            active={isActive("borders")}
            label="Toggle Borders"
          />
        </TooltipProvider>
      </div>
    )
  }
