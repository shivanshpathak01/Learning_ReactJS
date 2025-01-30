import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
//   ])

// 2nd method

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}> 
      <Route path='' element={<Home/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:id' element={<User  />} />
      <Route path='github' element={<Github/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
