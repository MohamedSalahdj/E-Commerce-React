import axios from "axios";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { changeFavorites } from '../Pages/Store/Actions/CounterAction'
import { useEffect, useState } from "react";
import './ProductCard.css'



class Cart {
    static count = 0;
    constructor(user, items = []) {
        this.id = user.email;
        this.user = user;
        this.items = items;
        // Order.count++;
    }
}

const user = JSON.parse(localStorage.getItem('users'))[0];
console.log("user", user)

function ProductCardComponent(props) {
    const favCounter = useSelector((state) => state.counter);
    const getProductsId = useSelector((state) => state.productsId);

    const [productList, setProductList] = useState([])

    const [skipItem, setSkipItem] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(()=>{
            axios.get(`https://dummyjson.com/products?limit=25&skip=${skipItem}`)
            .then((res) => setProductList(res.data.products))
            .catch((err) => console.log("err"))
    },[pageNumber,skipItem])

    const [carts, setCarts] = useState([]);
    const handleAddToCart = (productId) => {
        console.log("inside add to cart func");
        const updatedCarts = [...carts];
    
        // Check if the product already exists in the cart
        if (!updatedCarts.includes(productId)) {
            updatedCarts.push(productId,user.email);
            localStorage.setItem('carts', JSON.stringify(updatedCarts));
            setCarts(updatedCarts);
        }
    };


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
    // const isFavorite = getProductsId.includes(1);
    // console.log("check",getProductsId.includes('1'))
    // console.log(getProductsId)


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
                <button id={props.productId} className="btn text-light me-2 px-lg-4 add-to-card px-1" onClick={() => handleAddToCart(props.productId)}>Add To Cart</button>
                <span className=" text-success align-middle fs-7">${props.productPrice}</span>
            </div>
        </div>
    );
}

export default ProductCardComponent;
