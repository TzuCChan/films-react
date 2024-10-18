import React, { useEffect, useState } from 'react'
import Group from './Group'
import "./global.css"
import { Route, Routes } from 'react-router-dom'
import Film from './Film'
import Home from './Home'

export default function AllFilms({ data }) {
  const [organizedFilms, setOrganizedFilms] = useState([])
  const [showList, setShowList] = useState(false)
  const [films, setFilms] = useState([])

  const propComparator = (propName) =>
    (a, b) => a[propName].toLowerCase() === b[propName].toLowerCase() ? 0 : a[propName].toLowerCase() < b[propName].toLowerCase() ? -1 : 1

  
  useEffect(() => {
  
    data.sort(propComparator(`title`))

    let grouped = data.reduce((r, e) => {
      let group = e.title[0];
      if(!r[group]) r[group] = {group, children: [e]}
      else r[group].children.push(e);
      return r;
    }, {})

    let result = Object.values(grouped)
    setOrganizedFilms(result)


  }, [data])

}