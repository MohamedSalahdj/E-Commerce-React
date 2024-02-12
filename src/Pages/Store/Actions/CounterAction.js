
export const changeFavorites = (counter, productsId)=> {
    return {
        type: 'CHANGE_FAV',
        payload : {counter, productsId}
    }

}