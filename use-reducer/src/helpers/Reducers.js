export const reduceFunction = (state, action) => {
    switch (action) {
        case "turnOn":
            return !state;

        default:
            return state;
    }
};