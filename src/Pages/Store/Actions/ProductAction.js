import axios from "axios"

export const GetMoviesAction = () => (dispatch) =>
{
    return (
        axios.get("https://dummyjson.com/products?limit=100")
        .then((res) => dispatch({
            type: "PRODUCTS_DATA",
            payload: res.data.products
        } ))
        .catch((err) => console.log(err))
    )
}