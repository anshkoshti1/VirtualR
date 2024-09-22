import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider, Route } from 'react-router-dom'
import Signin from './Navbar/Signin.jsx'
import Createacc from './Navbar/Createacc.jsx'
import Navbar from './components/Navbar.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Navbar />,
//         children:[
//           {
//             path: '/sign-in',
//             element: <Signin />,
//           },
//           {
//             path: '/sign-up',
//             element:<Createacc />,
//           }
//         ]
//       }
//     ],
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Navbar/>}>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Createacc/>} />
      </Route>
    </Route> 
  )
)
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
