import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./galleryState";
import ClassComponent from "./classComponent";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(photos, "photos");
  return (
    <>
      <div className="App">
        <h1>POTO GALLERY</h1>
        <p>Enjoy!</p>
        <hr />
        <div className="gallery">
          {photos.map((photo) => (
            <img
              alt={photo.author}
              key={photo.id}
              src={photo.download_url}
              width="300"
              height="300"
            />
          ))}
        </div>
        <button>VIEW MORE</button>
      </div>
      <ClassComponent />
    </>
  );
}

export default App;
