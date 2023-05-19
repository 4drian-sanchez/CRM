import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import {IndexPage, loader as louderClientes } from '../pages/IndexPage'
import { NuevoCliente } from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <IndexPage/>,
        loader: louderClientes
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>
      }
    ]
  }
])

export const RouterApp = () => {
  return (
    <RouterProvider router={router}/>
  )
}
