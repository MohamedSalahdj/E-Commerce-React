import { useEffect, useState } from 'react';
import './main.css'
import './product-details.css'
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
function ProductDetailsFunction(props) {
    
    const [productDetails, setProductDetails] =useState({})

    const productId = useParams();
    console.log(productId.productId)
    console.log(props)

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${productId.productId}`)
        .then((res)  => setProductDetails(res.data))
        .catch((err) => console.log("error to get product details"))
    },[])

    console.log(productDetails)

return (
    <>
    
<section className="inner-section mt-5">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mt-3 mb-md-2 mb-sm-2 py-5">
            <div id="carouselExampleIndicators" className="carousel slide py-2">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src=""  className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="details-content">
                    <h3 className="details-name">
                        <a href="#" className='text-decoration-none'>{productDetails.title}</a>
                    </h3>
                    <div class="d-flex align-items-center mt-3">
                        <p className='me-3 text-secondary'>CATEGORY:<a href='#'className='ms-1 text-decoration-none text-secondary-emphasis lnk'  >{productDetails.category}</a></p>
                        <p className='me-3 text-secondary'>BRAND:<a href="#" className='ms-1 text-decoration-none text-secondary-emphasis lnk'>{productDetails.brand}</a></p>
                    </div>
                    <div className="details-rating">
                        <i className="active icofont-star"></i>
                        <i className="active icofont-star"></i>
                        <i className="active icofont-star"></i>
                        <i className="active icofont-star"></i>
                        <i className="icofont-star"></i>
                    </div>
                    <h3 className="details-price mt-4">
                        <span>${productDetails.price}</span>
                    </h3>
                    <p className="details-desc my-5">{productDetails.description}</p>
                    <div className="details-list-group d-flex">
                        <label className="details-list-title mb-5">Share:</label>
                        <ul className="details-share-list d-flex">
                            <li><a href="#" className="text-decoration-none icofont-facebook me-3 fs-3" title="Facebook"></a></li>
                            <li><a href="#" className="text-decoration-none icofont-twitter me-3 fs-3" title="Twitter"></a></li>
                            <li><a href="#" className="text-decoration-none icofont-linkedin me-3 fs-3" title="Linkedin"></a></li>
                            <li><a href="#" className="text-decoration-none icofont-instagram fs-3" title="Instagram"></a></li>
                        </ul>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <button className="btn btn-success cart-btn" title="Add to Cart">
                            <i className="fas fa-shopping-basket me-2"></i>
                            <span className=''>add to cart</span>
                        </button>

                        <a className="btn  fav-btn" href="#" title="Add Your Wishlist">
                            <i className="icofont-heart me-2"></i>
                            <span>add to wish</span>
                        </a>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    
    </>
)

}

export default ProductDetailsFunction;

