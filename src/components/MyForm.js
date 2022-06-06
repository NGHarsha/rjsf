import React, { useState } from "react";
import Form from "@rjsf/material-ui";
import axios from "axios";

import { jsonSchema } from "../Schemas/form.schema";
import { uiSchema } from "../Schemas/ui.schema";
import CustomRadio from "./CustomRadio";
import CustomSelect from "./CustomSelect";
import FileUploader from "./FileUploader";
import { Button, Grid } from "@material-ui/core";

const widgets = {
  RadioWidget: CustomRadio,
  SelectWidget: CustomSelect,
};

const fields = {
  fileField: FileUploader,
};

export const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    experience: [],
    education: [],
    resume: "",
  });
  const handleSubmit = async (e) => {
    console.log(e);
    try {
      let res = await axios.post("http://localhost:4000", e.formData);
      console.log(res);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleErrors = (errors) => {
    console.log(errors);
    let interestedErrors = errors.filter((error) => {
      console.log(error.name);
      return error.name !== "enum" && error.name !== "oneOf";
    });
    console.log(interestedErrors);
    return interestedErrors.map((error) => {
      if (error.property === ".resume") {
        error.message = "Please upload your resume";
      } else {
        error.message = "required";
      }
      return error;
    });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "10rem",
        maxWidth: "50rem",
        margin: "auto",
      }}
    >
      <Form
        schema={jsonSchema}
        uiSchema={uiSchema}
        widgets={widgets}
        fields={fields}
        onSubmit={(e) => handleSubmit(e)}
        noHtml5Validate
        showErrorList={false}
        transformErrors={handleErrors}
      >
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <Button color="primary" variant="contained" type="submit">
            SUBMIT
          </Button>
        </div>
      </Form>
    </div>
  );
};
