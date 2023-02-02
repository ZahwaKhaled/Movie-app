const InitialValues = {
    Cart: [],
    counter:0
}

const CartReducer = (state = InitialValues, action) => {
    switch (action.type) {
        case "ADDTOCART":
            return {
                ...state,
                Cart: [...state.Cart, action.payload]
            }
        case "REMOVEFROMCART":
            return {
                ...state,
                Cart: [...state.Cart, action.payload]
            }
        case "CHANGECOUNTER":
            return {
                ...state,
                counter: action.payload
            }
        default:
            return state
    }
};
export default CartReducer;