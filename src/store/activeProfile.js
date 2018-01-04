export default function (state = null, action) {
    if (action.type = "ELEMENT_SELECTED") {
        return action.payload;
    } else {
        return state;
    }
}