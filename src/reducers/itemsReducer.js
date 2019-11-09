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
                repeating: action.repeating,
                important: action.important,
                createdAt: action.createdAt
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

export const getVisibleItems = (state, filter, sorting) => {
    switch(filter) {
        case 'all':
            return sortSelector(state, sorting);
        case 'repeating':
            const repeatingItems = state.filter(item => {
                return item.repeating === true;
            });
            return sortSelector(repeatingItems, sorting);
            return state;
        case 'one-time':
            const oneTimeItems = state.filter(item => {
                return item.repeating !== true;
            });
            return sortSelector(oneTimeItems, sorting);
            return state;
        default:
            return state;
    }
}

const sortSelector = (state, sorting) => {
    if(sorting === 'chrono') {
        const chronoSortedItems = state.slice().sort((a,b) => {
            if(a.createdAt > b.createAt) {
                return 1;
            } else if (a.createAt < b.createAt) {
                return -1;
            } else {
                return 0;
            }
        })
        return chronoSortedItems.reverse();
    } else if (sorting === 'alpha') {
        const alPhaSortedItems = state.slice().sort((a,b) => {
            if(a.text < b.text) {
                return -1;
            } else if (a.text > b.text) {
                return 1;
            } else {
                return 0;
            }
        })
        return alPhaSortedItems;
    } else {
        return state;
    }
}