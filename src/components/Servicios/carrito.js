import axios from "axios"

const URL_API_CARRITO = 'https://655b2a46ab37729791a8a36d.mockapi.io/carrito'


export async function enviarCarrito(carrito) {
    try {
        const { data:carritoGuardado } = await axios.post(URL_API_CARRITO, {pedido: carrito})
        return carritoGuardado
    }
    catch(error) {
        console.error('ERROR POST AXIOS:', error.message)
        return {}
    }
}