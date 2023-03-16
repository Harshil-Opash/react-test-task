import React from 'react'
import style from "./titleStyle.module.css"
const title = (props) => {
  return (
    <>
    <div className={style.container1}>
      <div className={style.title}>{props.title}</div>
    </div>
    </>
  )
}

export default title
