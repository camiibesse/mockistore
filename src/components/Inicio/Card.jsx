import './Card.css';

export const Card = props => {

    const { producto, agregarCarritoID } = props

    return (
        <div className="item">
            <figure>
                <img src={producto.foto} alt={producto.nombre} />
            </figure>
            <div className='info-product'>
            <h2>{producto.nombre}</h2>
            <h3><b>Marca: </b>{producto.marca}</h3>
            <p><b>Categoría: </b>{producto.categoria}</p>
            <p><b>Detalles: </b>{producto.detalles}</p>
            <p><b>Stock: </b>{producto.stock}</p>
            <p><b style={{color:'orange'}}>Envío: </b>{producto.envio? 'Si' : 'No'}</p>
            <p><b className="precio">Precio: </b>${producto.precio}</p>
            <button onClick={
                    () => agregarCarritoID(producto.id)
                }>Agregar al carrito</button>
            </div>               
        </div>
    )
}