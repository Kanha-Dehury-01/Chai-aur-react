import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import { About, ContactUs, GitHub } from './components/index.js'
import User from './components/User.jsx'
import { apiInfo } from './components/GitHub.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<App/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact-us' element = {<ContactUs/>}/>
      <Route loader={apiInfo} path='/github' element = {<GitHub/>}/>
      <Route path='/user/:userid' element = {<User/>}/>
      </Route>
  )
)
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <App/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path: "contact-us",
//         element :<ContactUs/>
//       }

//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
