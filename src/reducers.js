function entities(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export function getStuff(state) {
    return state.Stuff || [];
}
export function getMessage(state) {
    return state.Msg || '';
}

export default entities;