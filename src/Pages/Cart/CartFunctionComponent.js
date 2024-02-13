import axios from "axios";
import { useState, useEffect } from "react";
import './CartFunctionComponent.css'

function CartFunctionComponent(){

    const [cartElement, setCartElement] = useState([]);
    let carts = JSON.parse(localStorage.getItem('carts')) || [];
    const user = localStorage.getItem('loggedInUser');

    // Filter cart items based on the logged-in user's email
    const userCart = carts.filter(item => item.userEmail === user);
    
    const [productQuantity, setProductQuantity] = useState(userCart.map(item => item.quantity));
    
    useEffect(() => {
        
        const productIdArray = userCart.map(item => item.productID);

        const apiRequests = productIdArray.map(id => {
            const apiUrl = `https://dummyjson.com/products/${id}`;
            return axios.get(apiUrl);
        });

        Promise.all(apiRequests)
            .then(responses => {
                const cartData = responses.map(response => response.data);
                setCartElement(cartData);
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, [userCart]); 

    const decrementQuantity = (index) => {
        console.log("decrementQuantity")
    }

    const increaseQuantity = (index) => {
        console.log("increaseQuantity")
       
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {cartElement.length > 0 ? 
                        <div className="col-lg-12 col-md-10 col-sm-11">
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">brand</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartElement.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td scope="row">{item.title}</td>
                                                <td><img src={item.thumbnail} style={{"width":"120px"}}/></td>
                                                <td>{item.brand}</td>
                                                <td>{productQuantity[index]}</td>
                                                <td>
                                                    <button className="btn text-success fs-2" onClick={() => decrementQuantity(index)}>-</button>
                                                    <button className="btn text-danger fs2-2" onClick={() => increaseQuantity(index)}>+</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        : <h1 className="text-center mt-5 text-success">Empty Cart</h1> }
                </div>
            </div>
        </>
    )
}

export default CartFunctionComponent;
