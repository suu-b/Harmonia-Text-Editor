/**
 * Defines how different block types are rendered in the editor.
 * @param {Object} props - The properties passed to the component.
 * @return {JSX.Element} element - The rendered block with respective styles.
 */
export const renderBlock = (props) => {
    let { element, children, attributes } = props

    const borderClass = "border p-1 border-3 border-slate-800 rounded"
    const alignmentClass = element.align
        ? element.align === "center"
            ? "text-center"
            : element.align === "right"
                ? "text-right"
                : element.align === "justify"
                    ? "text-justify"
                    : "text-left"
        : "text-left"

    const showBorders = element.showBorders || false
    switch (element.type) {
        case "heading1":
            return <h1 className={`text-3xl font-bold ${alignmentClass} ${showBorders ? borderClass : ""}`} {...attributes}>{children}</h1>
        case "heading2":
            return <h2 className={`text-xl font-bold ${alignmentClass} ${showBorders ? borderClass : ""}`} {...attributes}>{children}</h2>
        case "heading3":
            return <h3 className={`text-lg font-semibold ${alignmentClass} ${showBorders ? borderClass : ""}`} {...attributes}>{children}</h3>
        case "paragraph":
            return <p className={`text-base ${alignmentClass} ${showBorders ? borderClass : ""}`} {...attributes}>{children}</p>
        case "bulleted-list":
            return <ul {...attributes} className={`list-disc pl-5 ${alignmentClass} ${showBorders ? borderClass : ""}`}>{children}</ul>
        case "numbered-list":
            return <ol {...attributes} className={`list-decimal pl-5 ${alignmentClass} ${showBorders ? borderClass : ""}`}>{children}</ol>
        case "list-item":
            return <li className={`${alignmentClass} ${showBorders ? borderClass : ""}`} {...attributes}>{children}</li>
        case "code-block":
            return <p className={`bg-slate-100 text-slate-800 font-mono p-4 rounded overflow-x-auto`} {...attributes}>{children}</p>
        default:
            return <p className={`text-sm ${alignmentClass} ${showBorders ? borderClass : ""}`} {...attributes}>{children}</p>
    }
}
