import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
// Import the dropzone component
import Dropzone from "../components/DropZone/DropZone";
import "./style/UploadPage.css";
import NavBar from "../components/NavBar/NavBar";
import Button from "../components/Button/Button";

function UploadPage() {
  const history = useHistory();
  // onDrop function
  const onDrop = useCallback((acceptedFiles) => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);
  }, []);
  const onSearch = () => {};

  // We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook
  return (
    <main className="App_container">
      <NavBar searching={onSearch} />
      <Button title="Back" onClick={() => history.push("/employees")} />
      <h1 className="text-center">Upload your Profile Photo</h1>
      <Dropzone onDrop={onDrop} accept={"image/*"} />
    </main>
  );
}

export default UploadPage;
