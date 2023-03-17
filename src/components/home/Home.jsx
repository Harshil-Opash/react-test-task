import React from 'react'
import Title from '../Title/title.jsx'
import style from './HomeStyle.module.css'
import Card from '../Card/Card.jsx';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
    <div className={style.content}>
      <Title title='Popular Titles' />
      <div className={style.container}>
        <Link to="series">
          <Card name="Popular Series" site="https://picsum.photos/200"/>
        </Link>
        <Link to="movies">
          <Card name="Popular Movies" site="https://picsum.photos/200" />
        </Link>
      
      </div>
      </div>
     
    </>
  )
}

export default Home
