import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import FavoritProductsReducer from "./Producers/FavoritProductsReducer";


const ProductStore =  createStore(FavoritProductsReducer, composeWithDevTools())

export default ProductStore;