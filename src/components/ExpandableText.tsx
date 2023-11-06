import React from "react";
interface Props {
  para: string;
  expand: boolean;
  handleClick: () => void;
}
const ExpandableText = ({ para, expand, handleClick }: Props) => {
  const displayText = expand ? para.substring(0, 10) : para;
  return (
    <>
      <p>{displayText}</p>
      <button type="button" onClick={handleClick}>
        {expand ? "More" : "Less"}
      </button>
    </>
  );
};

export default ExpandableText;
