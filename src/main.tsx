import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.tsx'
import { RouterProvider ,createBrowserRouter, Outlet } from 'react-router-dom'
import Users from './pages/users/Users.tsx'
import Products from './pages/products/Products.tsx'
import Home from './pages/home/Home.tsx'
import Login from './pages/Login/Login.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/products',
        element: <Products />,
      }
    ] 
  },
  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
