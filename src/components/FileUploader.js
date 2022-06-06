import { Button } from "@material-ui/core";
import React from "react";

const FileUploader = (props) => {
  console.log(props);
  const uploadFile = (e) => {
    console.log(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div>
      <Button
        onChange={uploadFile}
        variant="contained"
        color="secondary"
        component="label"
      >
        Upload File
        <input type="file" hidden multiple />
      </Button>
    </div>
  );
};

export default FileUploader;
