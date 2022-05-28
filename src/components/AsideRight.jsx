import React, { useEffect, useState } from "react";
import axios from "axios";
import LocalTime from "./LocalTimeFn";

function AsideRight() {
  const [currLocData, setCurrLocData] = useState({
    city: "",
    state: "",
    country: ""
  });
  const [currLocWeatherCond, setCurrLocWeatherCond] = useState({
    weather: [{ id: "", description: "" }],
    main: { temp: "", temp_min: "", temp_max: "" }
  });

  const fetchData = async (city) => {
    const currWeatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=107a420b6f4b7dd8c2243eb7a310e6fe`;
    try {
      const resp = await axios.get(currWeatherApi);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const currLocationAPI =
      "https://extreme-ip-lookup.com/json/?key=f7Zqeoj2J8Z7gO4DtcYg";

    axios.get(currLocationAPI).then(async (res) => {
      fetchData(res.data.city);
      setCurrLocData({
        city: res.data.city,
        state: res.data.region,
        country: res.data.countryCode
      });
    });
  }, []);

  // console.log(currLocData);
  const { city, state, country } = currLocData;
  return (
    <aside id="right-side">
      <h3 className="aside-h3">Local Weather</h3>
      <div className="current-location">
        <span>{city}</span>
        <br />
        <span>{state}</span>
        {", "}
        <span>{country}</span>
      </div>
      <LocalTime />
    </aside>
  );
}

export default AsideRight;
