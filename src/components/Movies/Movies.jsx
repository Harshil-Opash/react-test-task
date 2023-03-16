import React from 'react'
import style from "./Movies.module.css"
import data from "../../sample.json"
import Card from '../Card/Card';
import Title from "../Title/title"
import { Link } from 'react-router-dom';

const Movies = () => {
  console.log(data.entries)
  let arr = [];
  let sortedMovies = data.entries.sort(
    (p1, p2) => (p1.title < p2.title) ? -1 : (p1.title > p2.title) ? 1 : 0);
  const showData = sortedMovies.map((element) => {
    if ((element.programType === "movie") && (element.releaseYear >= 2010)) {   
      arr.push(element)
      if(arr.length<=21){
        return (
          <div key={element.title} className={style.card}>
            <Card name={element.title} site="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg" />
          </div>)}
      }
      return null;
  })
  return (
    <>
      <Title title="Popular Movies" />
      <div className={style.data}>
        {showData}
      </div>
      <div style={{ textAlign: "center",margin:"1rem 0" }}>
        <Link to="/">
          <button>Back To Home</button>
        </Link>
      </div>
    </>
  )
}

export default Movies
