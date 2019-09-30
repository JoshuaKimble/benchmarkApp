function entities(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export function getStuff(state) {
    return state.stuff;
}
export function getMessage(state) {
    return state.msg;
}

export default entities;