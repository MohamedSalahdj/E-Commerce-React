import './ProductCard.css'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { changeFavorites } from '../Pages/Store/Actions/CounterAction'


function ProductCardComponent(props) {
    const favCounter = useSelector((state) => state.counter);
    const getProductsId = useSelector((state) => state.productsId);

    const dispatch = useDispatch();

    function addtoFavo(e) {
        const singleProductId = e.target.parentElement.parentElement.id;
        const addProduct = getProductsId;
        if (addProduct.includes(singleProductId)) {
            const updateProducts = getProductsId.filter((productID) => productID !== singleProductId);
            dispatch(changeFavorites(favCounter - 1, updateProducts));
        } else {
            addProduct.push(singleProductId);
            dispatch(changeFavorites(favCounter + 1, addProduct));
        }
    }

    // Determine if the product ID is in the favorites
    const isFavorite = getProductsId.includes(1);
    console.log("check",getProductsId.includes('1'))
    console.log(getProductsId)


    return (
        <div className="card mb-3 p-3" id={props.productId}>
            <div className='product-image'>
                <img src={props.productImage} className="card-img-top" alt={props.productTitle} style={{"height":"259px"}}/>
                <p onClick={(e) => addtoFavo(e)} className={`fas fa-heart heart-top ${getProductsId.includes(`${props.productId}`) && 'text-warning bg-black' }`}></p>
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
    );
}

export default ProductCardComponent;
