import React from 'react'
import {useNavigate} from 'react-router-dom'
const home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/pass');
    }
  return (
    <div>
      <h1>Generating passwords at fingertips</h1>
      <button onClick={handleClick}>Try Now</button>
    </div>
  )
}

export default home
