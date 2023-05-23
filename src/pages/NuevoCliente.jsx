import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import { Formulario, Error } from '../components'
import { nuevoCliente } from '../data/data';

export const action = async ( {request} ) => {
  const formData = await request.formData();
  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  const email = formData.get('email');

 /* El Object.formEntries() toma una lista de pares clave-valor y devuelve
  un nuevo objeto cuyas propiedades vienen dadas por esas entradas. */
  const datos = Object.fromEntries(formData);

  const errores = [];
  if( Object.values(datos).includes('') ) errores.push('Todos los campos son obligatorios')
  if(!regex.test(email)) errores.push('El email no es valido')
  if( Object.keys(errores).length ) {
    return errores
  }

  await nuevoCliente( datos )

  return redirect('/');
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
          /* Optional chaining: Devuelve undefined si no existe la propiedad */
          errores?.length && errores.map( (error, i ) => <Error key={i}>{ error }</Error>)
        }
        <Form
          method="post"
          noValidate
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
