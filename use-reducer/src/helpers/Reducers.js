export const reduceFunction = (state, action) => {
    switch (action) {
        case "addOne":
            return state + 1;
        case "removeOne":
            return state - 1;
        case "double":
            return state + state;
        case "reset":
            return 0;
        default:
            return state;
    }
};