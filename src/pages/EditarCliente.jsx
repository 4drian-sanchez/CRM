import { Form, redirect, useActionData, useLoaderData, useNavigate } from 'react-router-dom';
import { Error, Formulario } from '../components';
import {cliente, editarCliente} from '../data/data'
import {emailRegex} from '../helpers/helper'

export const louder = async ( {params: {clienteId: id}} ) => {
  const exite = await cliente(id);

  if(Object.values(exite).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'El cliente no fue encontrado'
    })
  }
    return exite
}

export const action = async ( {request, params: {clienteId: id}} ) => {
  const formData = await request.formData();
  const email = formData.get('email');

 /* El Object.formEntries() toma una lista de pares clave-valor y devuelve
  un nuevo objeto cuyas propiedades vienen dadas por esas entradas. */
  const datos = Object.fromEntries(formData);

  const errores = [];
  if( Object.values(datos).includes('') ) errores.push('Todos los campos son obligatorios')
  if(!emailRegex.test(email)) errores.push('El email no es valido')
  if( Object.keys(errores).length ) {
    return errores
  }

  await editarCliente(id, datos)  
  return redirect('/');
} 

export const EditarCliente = () => {

  const cliente = useLoaderData();
  const errores = useActionData();
  const navigate = useNavigate();

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
        <Formulario 
          {...cliente}
        />
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
