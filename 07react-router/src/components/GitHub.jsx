// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function User() {
//  const[follower,setFollower] = useState([]);

//  useEffect(() => {
//   fetch('https://api.github.com/users/kanha-dehury-01')
//   .then((response)=>(response.json()))
//   .then((follower)=>{
//     setFollower(follower)
//     console.log(follower)
//   })
// }, [])

const follower = useLoaderData()
console.log(follower);

  return (
    <div className='bg-black/40 rounded-xl m-3 border-white/30 border-2 p-4 text-center text-2xl outline outline-cyan-500 '>Github Follwers : {follower.followers} 
    <img src={follower.avatar_url} alt="" className='w-1/4 justify-center m-auto rounded-full' />
    </div>
  )
}

export default User

export const apiInfo = async () => {
    const response = await fetch('https://api.github.com/users/kanha-dehury-01')
    return response.json()
}