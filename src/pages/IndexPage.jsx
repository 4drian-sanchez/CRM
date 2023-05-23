import { useLoaderData } from 'react-router-dom';
import { Cliente } from '../components';
import { data } from '../data/data'

export const loader = () => {
  const clientes = data()
  return clientes
}

export const IndexPage = () => {

  const clientes = useLoaderData();

  return (
    <>
      <h2 className="font-bold text-4xl text-blue-900">Clientes</h2>
      <p className="mt-2">Administra tus clientes</p>

      <table
        className="table-auto shadow-md mt-8 w-full "
      >

        <thead className="bg-blue-900 text-white text-center">
          <tr>
            <td
              className="py-2  border-2 border-white border-solid"
            >
              Nombre
            </td>
            <td
              className="py-2  border-2 border-white border-solid"
            >
              Contacto
            </td>
            <td
              className="py-2  border-2 border-white border-solid"
            >
              Acciones
            </td>

          </tr>
        </thead>

        <tbody>
          {
            clientes.map( cliente => (
                  <Cliente key={cliente.id} cliente={ cliente }/>
            ))

          }

        </tbody>

      </table>
    </>
  )
}
