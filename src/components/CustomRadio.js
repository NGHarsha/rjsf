import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@material-ui/core";
import React from "react";

const CustomRadio = (props) => {
  const { id, required, schema, value, onChange, rawErrors, options } = props;
  return (
    <FormControl
      component="fieldset"
      disabled={schema.disabled}
      required={required}
      error={!!(rawErrors && rawErrors.length)}
      style={{ width: "100%", marginTop: 12 }}
    >
      <FormLabel style={{ fontSize: 12 }} component="legend">
        {schema.title}
      </FormLabel>
      <RadioGroup
        id={id}
        aria-label={schema.title}
        name={schema.title}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        row
      >
        {options &&
          options.enumOptions.map((o) => (
            <FormControlLabel
              key={o.value}
              value={o.value}
              control={<Radio />}
              label={o.label}
              disabled={o.disabled}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadio;
