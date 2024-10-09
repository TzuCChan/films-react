import React, { useEffect, useState } from 'react'
import Group from './Group'
import "./global.css"
import { Route, Routes } from 'react-router-dom'
import Film from './Film'
import Home from './Home'

export default function AllFilms({ data }) {
  const [organizedFilmss, setOrganizedFilmss] = useState([])
  const [showList, setShowList] = useState(false)
  const [films, setFilms] = useState([])
}