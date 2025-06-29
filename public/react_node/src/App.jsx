import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './NotFound'
import Home from './Home'
import {ToastContainer} from 'react-toastify'
import Posts from './components/Posts'
function App() {
  const router = createBrowserRouter([
    {
      path:'/login',
      element:<Login/>,
      errorElement:<NotFound/>
    },
    {
      path:'/register',
      element:<Register/>,
      errorElement:<NotFound/>
    },
    {
      path:'/',
      element:<Home/>,
      errorElement:<NotFound/>
    },{
      path:'/posts',
      element:<Posts/>,
      errorElement:<NotFound/>
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position='top-left' autoClose={3000}/>
    </>
  )
}

export default App
