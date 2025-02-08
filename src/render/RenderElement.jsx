export const renderElement = (props) => {
    let { element, children, attributes } = props
    const alignmentClass = element.align
        ? element.align === "center"
            ? "text-center"
            : element.align === "right"
                ? "text-right"
                : element.align === "justify"
                    ? "text-justify"
                    : "text-left"
        : "text-left"

    switch (element.type) {
        case "heading1":
            return <h1 className={`text-3xl font-bold ${alignmentClass}`} {...attributes}>{children}</h1>
        case "heading2":
            return <h2 className={`text-xl font-bold ${alignmentClass}`} {...attributes}>{children}</h2>
        case "heading3":
            return <h3 className={`text-lg font-semibold ${alignmentClass}`} {...attributes}>{children}</h3>
        case "paragraph":
            return <p className={`text-base ${alignmentClass}`} {...attributes}>{children}</p>
        case "bulleted-list":
            return <ul {...attributes} className={`list-disc pl-5 ${alignmentClass}`}>{children}</ul>
        case "numbered-list":
            return <ol {...attributes} className={`list-decimal pl-5 ${alignmentClass}`}>{children}</ol>
        case "list-item":
            return <li className={alignmentClass} {...attributes}>{children}</li>
        default:
            return <p className={`text-sm ${alignmentClass}`} {...attributes}>{children}</p>
    }
}