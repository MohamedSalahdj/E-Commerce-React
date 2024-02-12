
const INITIAL_STATE = {
    counter : 0,
    productsId : []
}
export default function FavoritProductsReducer(state=INITIAL_STATE, action)
{
    switch(action.type){
        case 'CHANGE_FAV':
            return {
                ...state,
                counter : action.payload.counter,
                productsId : action.payload.productsId
            }
        default:
            return state;
    }
}