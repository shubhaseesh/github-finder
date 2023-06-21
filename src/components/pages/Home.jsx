import React from 'react'
import UserList from '../users/UserData'

const Home = () => {
  return (
    <div>
        <div className="h1 text-6xl">Welcome</div>
        <UserList/>
    </div>
  )
}

export default Home