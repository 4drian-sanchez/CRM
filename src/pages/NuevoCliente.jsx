import { useNavigate, Form, useActionData } from 'react-router-dom'
import { Formulario, Error } from '../components'


export const action = async ( {request} ) => {
  const formData = await request.formData();

 /* El Object.formEntries() toma una lista de pares clave-valor y devuelve
  un nuevo objeto cuyas propiedades vienen dadas por esas entradas. */
  const datos = Object.fromEntries(formData);

  const errores = [];
  if( Object.values(datos).includes('') )  {
    errores.push('Todos los campos son obligatorios')
  }

  if( Object.keys(errores).length ) {
    return errores
  }
  return null;
}
export const NuevoCliente = () => {

  const navigate = useNavigate();
  const errores = useActionData();
  
  return (
    <>
      <h3 className="text-4xl text-blue-900 font-bold mb-3">Nuevo Cliente</h3>
      <p className="mb-4">Llena todos los campos para registrar un nuevo cliente</p>

      <button
        className="block ms-auto bg-blue-700 hover:bg-blue-900 transition-colors text-white py-2 px-4 uppercase rounded-md "
        onClick={() => navigate(-1)}
      >
        Regresar
      </button>

      <div className="mt-10 shadow-md rounded-md px-5 py-10 md:w3/4 mx-auto bg-white">
        {
          errores?.length && errores.map( (error, i ) => <Error key={i}>Todos los campos son obligatorios</Error>)
        }
        <Form
          method="post"
        >
          <Formulario />
          <input
            type="submit"
            value='Guardar'
            className="w-full bg-blue-700 hover:bg-blue-900 transition-colors text-white py-2 rounded-md uppercase font-bold mt-3"
          />
        </Form>
      </div>
    </>
  )
}
