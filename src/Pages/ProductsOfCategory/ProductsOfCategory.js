import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProductCardComponent from "../../Components/ProductCardComponent";

function ProductsOfCategory() {
    const [categoryProducts, setCategoryProducts] = useState([])

    const categoryName = useParams()
    console.log(categoryName.categoryName)
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${categoryName.categoryName}`)
        .then((res)=> setCategoryProducts(res.data.products))
        .catch((err) => console.log("err"))
    },[])

    console.log(categoryProducts)

    return (
        <>

            <div className="container mt-5">
                <div className="row">
                {categoryProducts.map((product,index)=> {
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

export default ProductsOfCategory;