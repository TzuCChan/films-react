import { Link } from "react-router-dom"
import { useState } from "react";
import "./global.css"
import Film from "./Film";

export default function Group({ showList, data }) {
  const [modal, setModal] = useState(false)
  const [Film, setFilm] = useState("")
  
  const Toggle = () => setModal(!modal);
}