import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCardComponent from "../../Components/CategoryCardComponent";
import ProductCardComponent from "../../Components/ProductCardComponent";

import { Link } from "react-router-dom"

import './HomeFunctionComponent.css'

function HomeFunctionComponent(){

    const [recentProducts, setRecentProducts] = useState([])

    const [productCategories, setProductCategories] = useState([])

    useEffect(()=> {
        axios.get('https://dummyjson.com/products/categories')
        .then((res) => setProductCategories(res.data))
        .catch((err) => console.log("Error"))


        axios.get('https://dummyjson.com/products?limit=12')
        .then((res) => setRecentProducts(res.data.products))
        .catch((err) => console.log("Error"))
    
    },[])
   
    console.log("12",recentProducts)

    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src="pro1.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img src="pro2.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src="pro3.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container-fluid category-section">
                <h3 className="text-center fs-4 pt-3 ">Our Categories</h3>
                <div className="container p-5">
                    <div className="row">
                        {productCategories.map((category) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-4 col-sm-12 category">
                                    <Link className='text-decoration-none' to={`/categoey/${category}`}>
                                        <CategoryCardComponent categoryName={category} />
                                    </Link>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>


        <div className="container-fluid category-section mt-5 p-5">
            <h3 className="text-center fs-4 pt-3 ">Recently Products</h3>
            <div className="container p-5">
                <div className="row">
                {recentProducts.map((product,index)=> {
                     const truncatedDescription = product.description.length > 50 ?
                     product.description.substring(0, 50) + " ..." :
                     product.description;
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <ProductCardComponent productId={product.id} productImage={product.thumbnail} productTitle={product.title} productDescription={truncatedDescription} productPrice={product.price}/>
                        </div>
                        )
                    })}
            </div>
        </div>
        </div>
       
        </>
    )

    
} 

export default HomeFunctionComponent;