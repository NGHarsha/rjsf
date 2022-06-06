import React from "react";
import Select from "react-select";

const CustomSelect = (props) => {
  const { id, required, schema, value, onChange, rawErrors, options } = props;
  console.log(props);

  const customStyles = {
    control: (styles) => ({
      ...styles,
      borderColor: rawErrors && rawErrors.length > 0 ? "red" : "",
    }),
  };

  const selectOptions = options.enumOptions.map((o) => {
    return { label: o.label, value: o.value };
  });

  return (
    <Select
      styles={customStyles}
      options={selectOptions}
      onChange={(e) => onChange(e.value)}
    />
  );
};

export default CustomSelect;
