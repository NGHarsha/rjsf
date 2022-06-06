import React from "react";
import { Button, Typography } from "@material-ui/core";

const ExperienceArrayTemplate = (props) => {
  return (
    <div className={props.className}>
      {props.items.length > 0 && (
        <Typography variant="h6">{props.title}</Typography>
      )}
      {props.items &&
        props.items.map((element) => (
          <div key={element.key}>
            <div>{element.children}</div>

            <Button
              onClick={element.onDropIndexClick(element.index)}
              variant="outlined"
              style={{
                marginTop: "1rem",
                color: "red",
                borderColor: "red",
              }}
            >
              Delete
            </Button>
            <hr />
          </div>
        ))}

      {props.canAdd && (
        <Button onClick={props.onAddClick} variant="outlined" color="primary">
          Add {props.title}
        </Button>
      )}
    </div>
  );
};

export default ExperienceArrayTemplate;
