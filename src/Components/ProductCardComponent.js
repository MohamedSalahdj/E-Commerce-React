import './ProductCard.css'
import { Link } from "react-router-dom"

function ProductCardComponent(props) {


    return (
        <>
        <div className="card mb-3 p-3" >
            <div className='product-image'>
                <img src={props.productImage} className="card-img-top" alt={props.productTitle} style={{"height":"259px"}}/>
                <a href="#" class="fas fa-heart heart-top"></a>

            </div>
            <div className="card-body">
            <Link to={`/productdetails/${props.productId}`} className='text-decoration-none'>
                <h5 className="card-title product-title">{props.productTitle}</h5>
            </Link>
                <p className="card-text text-secondary">{props.productDescription}</p>
                <a href="#" className="btn text-light me-2 px-lg-4 add-to-card">Add To Cart</a>
                <span className=" text-success align-middle fs-5">${props.productPrice}</span>
             </div>
        </div>
        </>
    )
}

export default ProductCardComponent;