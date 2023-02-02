const InitialState = {
    list: [],
};

export default function MoviesReducer(state = InitialState, action) {
    switch (action.type) {
        case "MOVIES":
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
}