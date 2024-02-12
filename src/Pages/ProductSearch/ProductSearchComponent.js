import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProductCardComponent from "../../Components/ProductCardComponent";

function ProductSearchComponent() {
    
    const [resultSearchedProducts, setResultSearchedProducts] = useState([])

    const productName = useParams();
    console.log(productName)

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/search?q=${productName.productName}`)
        .then((res) => setResultSearchedProducts(res.data.products))
        .catch((err) => console.log('Error'))
    },[productName.productName])

    console.log(resultSearchedProducts)

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                {resultSearchedProducts.map((product,index)=> {
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
        </>
    )
}

export default ProductSearchComponent;