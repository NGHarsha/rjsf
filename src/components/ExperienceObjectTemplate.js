import React from "react";
import { Grid } from "@material-ui/core";

const ExperienceObjectTemplate = (props) => {
  const { TitleField, properties, title, description } = props;
  //console.log(props);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} key={properties[0].content.key}>
        {properties[0].content}
      </Grid>
      {properties.length > 3 ? (
        <>
          <Grid item xs={12} md={3} key={properties[1].content.key}>
            {properties[1].content}
          </Grid>
          <Grid item xs={12} md={3} key={properties[3].content.key}>
            {properties[3].content}
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} md={6} key={properties[1].content.key}>
            {properties[1].content}
          </Grid>
        </>
      )}
      <Grid item key={properties[2].content.key}>
        {properties[2].content}
      </Grid>
    </Grid>
  );
};

export default ExperienceObjectTemplate;
