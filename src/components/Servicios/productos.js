import axios from "axios"

const URL_PRODUCTOS = 'https://655b2a46ab37729791a8a36d.mockapi.io/productos/'

export async function obtenerProductos() {

    try {
        const { data:productosLeidos } = await axios.get(URL_PRODUCTOS)
        return productosLeidos
    }
    catch(error) {
        console.error('ERROR GET AXIOS:', error.message)
        return []
    }
}

export async function guardarProducto(producto) {
    try {
        const { data:productoGuardado } = await axios.post(URL_PRODUCTOS, producto)
        return productoGuardado
    }
    catch(error) {
        console.error('ERROR POST AXIOS:', error.message)
        return {}
    }
}


export async function actualizarProducto(id,producto) {
    try {
        const { data:productoActualizado } = await axios.put(URL_PRODUCTOS+id, producto)
        return productoActualizado
    }
    catch(error) {
        console.error('ERROR PUT AXIOS:', error.message)
        return {}
    }
}

export async function borrarProducto(id) {
    try {
        const { data:productoEliminado } = await axios.delete(URL_PRODUCTOS+id)
        return productoEliminado
    }
    catch(error) {
        console.error('ERROR DELETE AXIOS:', error.message)
        return {}
    }
}