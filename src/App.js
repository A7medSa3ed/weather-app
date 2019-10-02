import React, { Component } from "react";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import "./App.css";
export class App extends Component {
  state = {
    weather: {
      temp: "",
      city: "",
      country: "",
      humidity: "",
      description: "",
      error: ""
    }
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiKey = "d828ad4d3d93b95b1a10769e5b576d9a";
    const apiData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    );
    const data = await apiData.json();
    console.log(data);
    if (data.cod === "404") {
      this.setState({
        weather: {
          temp: "",
          city: "",
          country: "",
          description: "",
          error: "Please Enter Correct Data"
        }
      });
    } else if (city && country) {
      this.setState({
        weather: {
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        }
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Form getWeather={this.getWeather} />
          <Weather weather={this.state.weather} />
        </div>
      </div>
    );
  }
}

export default App;
