import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import "./App.css";

const URL = "https://api.unsplash.com/photos/?client_id=";
const KEY = "6LeVxhZbtMT8u_jQVsnGTZFjto_Ro-DvsBt-Sx2OUAE";
function App() {
  const [photos, setPhotos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [reset, updateReset] = useState([]);
  const fechingFromServer = async () => {
    try {
      const [page1, page2] = await axios.all([
        axios.get(URL + KEY + "&page=2"),
        axios.get(URL + KEY + "&page=3"),
      ]);

      let data = [
        ...page1.data,
        ...page1.data,
        ...page2.data.slice(0, 2),
        ...page2.data.slice(0, 2),
      ];

      data = data.map((image) => {
        return { ...image, unique: nanoid() };
      });

      const shuffle = (array) => {
        for (let i = 0; i < array.length; i++) {
          let temp = Math.floor(Math.random() * array.length);
          let curr = array[temp];
          array[temp] = array[i];
          array[i] = curr;
        }
        return array;
      };
      data = shuffle(data);

      setPhotos(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handlerClick = (index) => {
    let newPhotos = [...photos];
    newPhotos[index].showThisPhoto = true;
    setPhotos(newPhotos);
    if (selected === null) {
      setSelected(index);
      return;
    } else {
      if (newPhotos[index].unique === newPhotos[selected].unique) {
        console.log("clicked");
      } else {
        if (newPhotos[index].id !== newPhotos[selected].id) {
          console.log("they are different");
          setTimeout(() => {
            newPhotos[index].showThisPhoto = false;
            newPhotos[selected].showThisPhoto = false;
            setPhotos(newPhotos);
            setSelected(null);
          }, 100);
        } else {
          setSelected(null);
          console.log("they have the same id");
        }
      }
    }
  };

  useEffect(() => {
    fechingFromServer();
  }, [reset]);
  const handleReset = () => {
    updateReset(photos);
  };

  return (
    <div className="App">
      {photos.map((photo, index) => {
        return (
          <div
            className="card"
            key={photo.unique}
            onClick={() => handlerClick(index)}>
            <img
              src={photo.urls.thumb}
              alt={photo.alt_description}
              className={photo.showThisPhoto ? "show" : "not-show"}
            />
          </div>
        );
      })}
      <button onClick={() => handleReset()}>RESET</button>
    </div>
  );
}

export default App;
