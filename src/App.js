import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const URL = "https://api.unsplash.com/photos/?client_id=";
const KEY = "6LeVxhZbtMT8u_jQVsnGTZFjto_Ro-DvsBt-Sx2OUAE";

function App() {
  const [photos, setPhotos] = useState([]);
  const fetchFromServer = async () => {
    try {
      const [page1, page1] = await axios.all([
        axios.get(URL + KEY + "&page=2"),
        axios.get(URL + KEY + "&page=3"),
      ]);

      setPhotos(page1.data, page2.data);
    } catch (err) {
      console.log(err);
    }
  };
  /*  useEffect(() => {
    fetchFromServer();
  }); */
  fetchFromServer();
  return <div>App</div>;
}
export default App;
