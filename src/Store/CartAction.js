export const addToFav = (payload) => {
    return {
        type: "ADDTOCART",
        payload
    }
}
export const RemoveFromFav = (payload) => {
    return {
        type: "REMOVEFROMCART",
        payload
    }
}
export const Count = (payload) => {
    return {
        type: "CHANGECOUNTER",
        payload
    }
}