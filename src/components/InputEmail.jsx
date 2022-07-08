import React from "react";

const InputEmail = ({ placeholder, padding, width }) => {
  return (
    <div>
      <input
        type="email"
        name=""
        id=""
        placeholder={placeholder}
        style={{ padding: padding, minWidth: width }}
      />
    </div>
  );
};

export default InputEmail;
