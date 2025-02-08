export const renderLeaf = (props) => {
    let { attributes, children, leaf } = props;

    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }
    if (leaf.italic) {
        children = <em>{children}</em>;
    }
    if (leaf.underline) {
        children = <u>{children}</u>;
    }
    if (leaf.highlight) {
        children = <span className="bg-blue-200 rounded">{children}</span>;
    }
    return <span {...attributes}>{children}</span>;
};
