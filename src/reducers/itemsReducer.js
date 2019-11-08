const initState = [
    {
        id: '234asa-afasdfsd-fsdfsdf',
        text: 'carrots',
        repeating: false
    }
]
const items = (state = initState, action) => {

    switch(action.type) {
        case "ADD_ITEM":
            const item = {
                id: action.id,
                text: action.text,
                repeating: action.repeating
            }
            return state.concat(item);

        case "DELETE_ITEM":
            return state.filter(item => {
                return item.id !== action.id;
            });
            
        default:
            return state;
    }
}

export default items;

export const getVisibleItems = (state, filter) => {
    switch(filter) {
        case 'all':
            return state;
        case 'repeating':
            return state.filter(item => {
                return item.repeating === true;
            });
        case 'one-time':
            return state.filter(item => {
                // console.log("asdf'", item.repeating !== true)
                return item.repeating !== true;
            });
        default:
            return state;
    }
}