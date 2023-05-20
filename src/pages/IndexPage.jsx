import { useLoaderData } from 'react-router-dom';
import { Cliente } from '../components';

export const loader = () => {

  const clientes = [
    {
      id: 1,
      nombre: 'Juan',
      telefono: 102013313,
      email: "juan@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 2,
      nombre: 'Karen',
      telefono: 138198313,
      email: "karen@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 3,
      nombre: 'Josue',
      telefono: 31983913,
      email: "josue@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 4,
      nombre: 'Miguel',
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 5,
      nombre: 'Pedro',
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: 'Codigo Con Juan'
    },
  ];
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
