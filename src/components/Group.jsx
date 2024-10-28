import { Link } from "react-router-dom"
import { useState } from "react";
import "./global.css"
import Film from "./Film";

export default function Group({ showList, data }) {
  const [modal, setModal] = useState(false)
  const [Film, setFilm] = useState("")
  
  const Toggle = () => setModal(!modal);

  const handleChange = (event) => {
    data.map((film) => {
      if (film.title.toUpperCase() === event.target.value.toUpperCase()) { 
        setFilm(film)
      }
    })
  }

  return <div>{showList ? film ?
    <div className="list-container">
      <Link to={`/all-films/${film.id}`}>
        <button className="one-film" onClick={() => Toggle()}>{film.title}</button>
      </Link>
    </div>
    :
    <div> 
      <ul>
        <input type='text' placeholder='Search for Film' onChange={handleChange}>
        
        </input>
        {data.map((film) => {
          return (
            
            <li>
            <Link to={`/all-films/${film.id}`}>
              <button onClick={() => Toggle()}>{film.title}</button>
            </Link> 
            </li>
          )  
        })}
      </ul>
    </div> : null}</div>
}