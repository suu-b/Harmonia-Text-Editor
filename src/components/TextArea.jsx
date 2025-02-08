import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Editable } from "slate-react";

const TextArea = ({ renderElement, renderLeaf }) => {
  return (
    <Editable
      renderElement={renderElement}
      renderLeaf={renderLeaf}
      className="px-24 py-12 pb-24 w-[794px] min-h-[1123px] m-auto bg-white shadow-lg border border-gray-200 rounded ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none"
    />
  );
};

export default TextArea;
