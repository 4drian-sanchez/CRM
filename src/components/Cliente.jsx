export const Cliente = ({ cliente: { nombre, empresa, email, telefono } }) => {
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
                        <button className="font-bold text-blue-600 transition-colors hover:text-blue-800 me-3" type="button">
                            Editar
                        </button>
                        <button className="font-bold text-red-600 transition-colors hover:text-red-800" type="button">
                            Eliminar
                        </button>

                    </div>
                </td>
            </tr>

        </>
    )
}
