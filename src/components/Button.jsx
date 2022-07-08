import React from "react";

const Button = ({
  name,
  width,
  padding,
  cursor,
  border,
  bgColor,
  color,
  br,
}) => {
  return (
    <div>
      <input
        type="button"
        value={name}
        style={{
          width: width,
          padding: padding,
          cursor: cursor,
          border: border,
          backgroundColor: bgColor,
          color: color,
          borderRadius: br,
        }}
      />
    </div>
  );
};

export default Button;
