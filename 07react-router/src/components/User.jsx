// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-black/40 rounded-xl m-3 border-white/30 border-2 p-4 text-center text-2xl outline outline-cyan-500 '>User : {userid }</div>
  )
}

export default User