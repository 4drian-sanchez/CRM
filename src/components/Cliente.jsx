import { Form, useNavigate, redirect } from "react-router-dom"
import { eliminarCliente } from '../data/data'
import Swal from 'sweetalert2'

export const action = async ({ params: { clienteId: id } }) => {
    await eliminarCliente(id)
    return redirect('/')
}

const hundleSubmit = e => {
    e.preventDefault();
    
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'text-white py-1 px-3 bg-green-500 ms-2 transition-colors hover:bg-green-700 rounded-sm',
          cancelButton: 'text-white py-1 px-3 bg-red-500 ms-2 transition-colors hover:bg-red-700 rounded-sm'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro de que quieres eliminar el cliente?',
        text: '¡No podrás recuperar el registro del cliente!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            eliminar = true
          swalWithBootstrapButtons.fire(
            '¡Eliminado!',
            'Tu cliente se ha eliminado.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        
          swalWithBootstrapButtons.fire(
            '¡Cancelado!',
            'Tu cliente seguira en el registro',
            'error'
          )
        }
      })
}

export const Cliente = ({ cliente: { nombre, empresa, email, telefono, id } }) => {
    const navigate = useNavigate()

    return (
        <>
            <tr>
                <td className="p-3">
                    <p className="text-2xl mb-2 font-bold">
                        {nombre}
                        <span className="block text-sm font-light">{empresa}</span>
                    </p>
                </td>
                <td className="p-3">
                    <p className="mb-2">
                        <b>Correo: </b>  {email}
                        <span className="block">
                            <b>Telefono: </b> {telefono}
                        </span>
                    </p>
                </td>
                <td className="p-3">
                    <div className="flex">
                        <button
                            className="font-bold text-blue-600 transition-colors hover:text-blue-800 me-3"
                            type="button"
                            onClick={() => navigate(`/clientes/${id}/editar`)}
                        >
                            Editar
                        </button>
                        <Form
                            method="POST"
                            action={`clientes/${id}/eliminar`}
                            onSubmit={ hundleSubmit}
                        >
                            <button
                                className="font-bold text-red-600 transition-colors hover:text-red-800"
                                type="submit"
                            >
                                Eliminar
                            </button>

                        </Form>

                    </div>
                </td>
            </tr>

        </>
    )
}
