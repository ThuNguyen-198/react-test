import React from "react";
interface Props {
  btnType: string;
  text: string;
  onSelect: () => void;
}
const Button = ({ btnType, text, onSelect }) => {
  return (
    <>
      <button className={btnType} onClick={onSelect}>
        {" "}
        {text}
      </button>
    </>
  );
};

export default Button;
