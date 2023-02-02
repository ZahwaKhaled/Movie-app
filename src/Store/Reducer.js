const InitialVals = {
    lang: "EN",
    theme: "light"
}

export default function Reducer(state = InitialVals, action) {

    switch (action.type) {
        case "CHANGE-LANG":
            return {
                ...state,
                lang: action.payload

            }
        default:
            return state
    }
}