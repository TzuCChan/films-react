import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Film({show}) {
  const [filmDetails, setFilmDetails] = useState([])


  let { film_id } = useParams()  
  
  
  useEffect(() => {
    const getDetails = async()=>{
      const response = await axios.get(
        `https://ga-movies-api.herokuapp.com/movies/${movie_id}`,
        {
          mode: "no-cors",
        }
      );
      setFilmDetails(response.data[0])
    }
    getDetails();
  }, [film_id])


  if (!filmDetails) return <h3>Loading...</h3>;

  return (
    <div>
      {
        (<div className='films-details'>
          <h1>{filmDetails.title}</h1>
          <h3 className='description'>{filmDetails.overview}</h3>
          <img src={filmDetails.poster_path} alt={filmDetails.title} width="350px" height="500px"/>
          <h3>Release Date:{filmDetails.release_date}</h3>
        </div>
        )}
    </div>
  )
}