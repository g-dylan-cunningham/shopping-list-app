
let initialId = 0;
const initState = [
    {
        id: 'asdfds',
        text: 'carrots',
        repeating: false
    }
]
const items = (state = initState, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return state;
        case "DELETE_ITEM":
            return state;
        default:
            return state;
    }
}

export default items;