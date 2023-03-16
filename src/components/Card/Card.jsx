import React from 'react'
import style from "./Card.module.css"
const Card = (props) => {
  return (
    <>
    <div className={style.series}>
        <div className={style.content}>
          <img src={props.site} alt="series" height="200px" width="200px" />
        </div>
        <div>
            {props.name}
        </div>
      </div>
    </>
  )
}

export default Card
