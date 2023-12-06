import axios from "axios"

const URL = 'https://655b2a46ab37729791a8a36d.mockapi.io/productos/'

export async function obtenerProductos() {

    try {
        const { data:productosLeidos } = await axios.get(URL)
        return productosLeidos
    }
    catch(error) {
        console.error('Error al querer obtener los productos', error.message)
        return []
    }
}

export async function guardarProducto(producto) {
    try {
        const { data:productoGuardado } = await axios.post(URL, producto)
        return productoGuardado
    }
    catch(error) {
        console.error('ERROR POST AXIOS:', error.message)
        return {}
    }
}


export async function actualizarProducto(id,producto) {
    try {
        const { data:productoActualizado } = await axios.put(URL+id, producto)
        return productoActualizado
    }
    catch(error) {
        console.error('ERROR PUT AXIOS:', error.message)
        return {}
    }
}

export async function borrarProducto(id) {
    try {
        const { data:productoEliminado } = await axios.delete(URL+id)
        return productoEliminado
    }
    catch(error) {
        console.error('ERROR DELETE AXIOS:', error.message)
        return {}
    }
}