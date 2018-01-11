export default function (state = null, action) {
    if (action.type = "RENDER_ACTION") {
        return action.filter;
    } else {
        return state;
    }
}