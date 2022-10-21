import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Dropzone from "../components/DropZone/DropZone";
import "./style/UploadPage.css";
import NavBar from "../components/NavBar/NavBar";
import Button from "../components/Button/Button";
import cuid from "cuid";
import ImageList from "../components/ImageList/ImageList";

function UploadPage() {
  const [images, setImages] = useState([]);
  const history = useHistory();

  const toDataURL = (url) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  // onDrop function
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function (e) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it.
        toDataURL(e.target.result, function (dataUrl) {
          console.log("RESULT:");
        });

        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
    console.log(acceptedFiles);
  }, []);

  const onSearch = () => {};

  toDataURL(images);
  images.map((e) => console.log(e));

  useEffect(() => {
    <button
      onClick={() => {
        const save = localStorage.getItem("image");
        const initialValue = JSON.parse(save);
        console.log(initialValue);
      }}
    >
      Click Me
    </button>;
  }, [images]);

  return (
    <main className="App_container">
      <NavBar searching={onSearch} />
      <Button title="Back" onClick={() => history.push("/employees")} />
      <h1 className="text-center">Upload your Profile Photo</h1>
      <Dropzone onDrop={onDrop} accept={"image/*"} />
      <ImageList images={images} />
    </main>
  );
}

export default UploadPage;
