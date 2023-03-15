import React from "react";

const BaseInput = ({
  label,
  type,
  id,
  value,
  handleChange,
  required = false,
  disabled = false,
  placeholder,
  className,
}) => {
  function handleInputChange(e) {
    handleChange(e.target.id, e.target.value);
    console.log(e.target.value, typeof e.target.value);
  }
  return (
    <label>
      {label ?? ""}
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleInputChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder ?? ""}
        className={`bg-transparent placeholder:text-greyscale2 py-2 border-b w-full border-primary focus:outline-none ${
          className ?? ""
        }`}
      />
    </label>
  );
};

export default BaseInput;
