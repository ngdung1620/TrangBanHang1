import * as types from './../constants/ActionType';
export const addToCard = (product, quantity) => {
    return {
        type: types.ADD_TO_CARD,
        product,
        quantity
    }
}
export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}
export const removeProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const changeQuantity = (product, quantity, amount) => {
    return {
        type: types.CHANGE_QUANTITY,
        product,
        quantity,
        amount
    }
}