import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllFilms from "./components/AllFilms";
import Film from "./components/Film";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://ga-movies-api.herokuapp.com/ids",
      {
        mode: "no-cors",
      }
    );
    setData(response.data);
  }
}