export  const data = async () => {
    const resp = await fetch( import.meta.env.VITE_API_URL );
    const data = await resp.json();
    return data
}

export const cliente = async (id) => {
    const resp = await fetch( `${import.meta.env.VITE_API_URL}/${id}` );
    const data = await resp.json();
    return data
}

export const nuevoCliente = async ( datos ) => {

    try {
        const resp = await fetch( import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                "content-type": "application/json"
            }
        });

        /* await resp.json(); */
        
        const data = await resp.json();
        return data
    } catch (error) {
        console.log(error)
    }


}

export const editarCliente = async (id, datos) => {
    const resp = await fetch( `${import.meta.env.VITE_API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers: {
            "content-type": "application/json"
        }
    } );
    const data = await resp.json();
    return data
}

export const eliminarCliente = async (id) => {
    const resp = await fetch( `${import.meta.env.VITE_API_URL}/${id}`, {
        method: 'DELETE',
    } );

    const data = await resp.json();
    return data
}