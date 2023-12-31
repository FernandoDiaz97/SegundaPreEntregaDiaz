import "./Item.css";
import { Link } from "react-router-dom";


const Item = ({ id, name, img, price, stock, category }) => {
    return (

        <div className="grid">

            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="ItemImg"></img>
                </picture>
                <section>
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer className="ItemFooter">
                    <Link to={`/item/${id}`} className="Option2">Ver detalle</Link>
                </footer>
            </article>
        </div>

    )
}

export default Item;