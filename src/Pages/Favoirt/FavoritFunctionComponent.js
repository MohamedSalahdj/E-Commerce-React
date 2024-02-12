import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCardComponent from "../../Components/ProductCardComponent";

function FavoritFunctionComponent() {
    const [favoritProducts, setFavoritProducts] = useState([]);
    const getProductsId = useSelector((state) => state.productsId);

    useEffect(() => {
        const productsApi = getProductsId.map((productId) => `https://dummyjson.com/products/${productId}`);
        axios.all(productsApi.map((product) => axios.get(product)))
            .then((res) => {
                const productData = res.map((res) => res.data);
                setFavoritProducts(productData);
            })
            .catch((error) => {
                console.error("Error fetching favorit products:", error);
            });
    }, [getProductsId]);

    console.log(favoritProducts)
    
    return (
        <>
            <h1 className="text-center my-5 text-success">Favorit Page</h1>
            <div className="container">
                <div className="row">
                    {favoritProducts.length > 0 ? (
                        favoritProducts.map((product, index) => {
                            const truncatedDescription = product.description.length > 50 ? product.description.substring(0, 50) + " ..." : product.description;
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-12" key={index}>
                                    <ProductCardComponent
                                        productId={product.id}
                                        productImage={product.thumbnail}
                                        productTitle={product.title}
                                        productDescription={truncatedDescription}
                                        productPrice={product.price}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <div class="spinner-grow text-success mx-auto" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default FavoritFunctionComponent;
