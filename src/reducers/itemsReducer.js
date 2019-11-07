
let initialId = 0;
const items = (state = [
    {
        id: 'asdfds',
        text: 'carrots',
        repeating: false
    }
], action) => {
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