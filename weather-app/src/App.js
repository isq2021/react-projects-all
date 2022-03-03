import axios from "axios";
import { useState, useEffect } from "react";
import "./app.css";
/*this object will have your keys and the base urs*/
/* please get your key from https://home.openweathermap.org/users/sign_up */
const api = {
  key: "709b63c322390f658b0d0fb3a8ec6efb",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const cities = [
    "Select city",
    "Bishkek",
    "California",
    "Sonsonate",
    "London",
    "Tokyo",
    "Istanbul",
    "Moscow",
    "Kiev",
    "Dudinka",
  ];
  //{
  /*you can add more cities here*/
  //}
  const handleCity = (e) => {
    setSelectedCity(e.target.value);
  };

  // im giving you one useState that is with the start value of the cities index[1]
  const [selectedCity, setSelectedCity] = useState(cities[1]);
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState([]);
  console.log(temp);
  const [icon, setIcon] = useState("");

  // maybe after calling the API in use effect you will need to save the information in another useState
  // like weather

  /*create a fuction to call the api*/
  const fetchApi = async () => {
    try {
      const data = await axios.get(
        `${api.base}weather?q=${selectedCity}&units=metric&APPID=${api.key}`
      );

      setWeather(data.data.weather[0].description);
      setTemp(data.data.main.temp.toFixed(0));
      setIcon(data.data.weather[0].icon);
      console.log(data);
    } catch (err) {
      setSelectedCity("Please select a city");
      setTemp("");
      setWeather("");
    }
  };

  // remeber every time the city changes you need to call the api with the new data
  //here you will write your useEffect
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  /*  const handleImg = () => {
    if (temp < 0) {
      return "cold";
    } else if (temp > 0) {
      return "warm";
    } else {
      return "";
    }
  }; */

  /* here you have a model of the api*/
  /* `${api.base}weather?q=${selectedCity}&units=metric&APPID=${api.key}`*/

  // here is needed to filter the data that you aredy got from your API
  //
  // HINT !!!! maybe when you call the API the will be empty and you will have an error
  return (
    <div className={temp > 5 ? "container warm" : "container cold"}>
      <div className=" app" id={temp > 5 ? "warm" : "cold"}>
        <main>
          <div className="top">
            <div className="location">{selectedCity}</div>

            <div>
              <div className="temp">
                <h2>{temp + "\u00b0C"}</h2>
              </div>
              <div>
                <div className="situation">
                  <h3>{weather}</h3>
                </div>
              </div>
              <h2>{new Date().toDateString("en-US")}</h2>
            </div>
          </div>
          <div className="select-area">
            {/*create a selector to show the cities
            on change you need to update your selectedCity
          
*/}

            <select
              className="custom-select"
              value={selectedCity}
              onChange={handleCity}>
              {/* we need to map our cities in order to show the options */}
              {cities.map((city) => {
                return <option>{city}</option>;
              })}
            </select>
            <br />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
