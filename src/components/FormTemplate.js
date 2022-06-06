import React from "react";
import { Grid, Typography } from "@material-ui/core";

const FormTemplate = (props) => {
  const { TitleField, properties, title, description } = props;

  return (
    <>
      <Typography
        style={{ marginBottom: "2rem", marginTop: "2rem" }}
        variant="h4"
      >
        {title}
      </Typography>
      <Grid container spacing={2}>
        {properties.map((prop) => {
          if (prop.name === "firstName" || prop.name === "lastName") {
            return (
              <Grid item xs={12} md={6} key={prop.content.key}>
                {prop.content}
              </Grid>
            );
          }
          return (
            <Grid item xs={12} key={prop.content.key}>
              {prop.content}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default FormTemplate;
