import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import {
  NuevoCliente,
  action as actionNuevoCliente,
  IndexErrorPage as ErrorPage,
  IndexPage, loader as louderClientes 
} from '../pages'

import { 
  EditarCliente,
  action as actionEditarCliente,
  louder as louderEditarCliente
  } from '../pages/EditarCliente';
  
  import { action as actionClienteEliminar } from '../components/Cliente'
  
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
        loader: louderClientes,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: actionNuevoCliente
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: louderEditarCliente,
        action: actionEditarCliente,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: actionClienteEliminar
      }
    ]
  }
])

export const RouterApp = () => {
  return (
    <RouterProvider router={router} />
  )
}
