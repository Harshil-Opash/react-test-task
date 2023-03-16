import React from 'react'
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.container}>
      <div className={style.demo}>
        DEMO Streaming
      </div>
      <div className={style.btn}>
        <button className={style.login}>Log in</button>
        <button className={style.trail}>Start Your Free Trial</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
