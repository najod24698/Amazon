export const initialState = {
    basket: [],
    user: null
};

export const getBasketSubtotal = (basket) =>
    basket?. reduce((amount, item) => item.cost + amount, 0);


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                basket: [...state.basket, action.basket]
            }
        case "REMOVE_FROM_BASKET":
            const ondexOfitem = state.basket.findIndex((item) => item.id === action.id);
            let newBasket = [...state.basket]

            if (ondexOfitem >= 0) {
                newBasket.splice(ondexOfitem, 1)
            }
            else {
                console.log("i connot delete")
            }
            console.log(action)
            return {
                ...state,
                basket: newBasket
            }
        case "CREATE_USER":
            return {
                state,
                user: action.user,
            }
        default:
            return state
    }
}

export default reducer