import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <>
            <div style={{ fontSize: "3rem", textAlign: "center" }}>
                404 Page not found

            </div>
            <div style={{textAlign:"center",marginTop:"1.5rem"}}>
            <Link to="/">
                <button>Back to home </button>
            </Link></div>
        </>
    )
}

export default Error
