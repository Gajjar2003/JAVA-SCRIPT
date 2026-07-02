import React from 'react'
import mahi from '../assets/mahi4.jpg'

function Home(props) {

    const userinfor = props.user;
  return (
    <div>
        <h2>Username:{userinfor.username}</h2>
        <h2>Email:{userinfor.email}</h2>
        <h2>Phone:{userinfor.phone}</h2>
        <img src={mahi} alt="mahi image" />
    </div>
  )
}

export default Home
