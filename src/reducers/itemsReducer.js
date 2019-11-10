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
        case "TOGGLE_ITEM_IMPORTANT":
            const newState = state.filter(item => {
                if(item.id !== action.id) {
                    return item;
                } else {
                    item.important = !item.important;
                    return item;
                }
            })
            return newState;
        default:
            return state;
    }
}

export default items;

export const getVisibleItems = (state, filter, sorting, important) => {
    switch(filter) {
        case 'all':
            return filterImportant(sortCreatedAtSelector(state, sorting), important);
            
        case 'repeating':
            const repeatingItems = state.filter(item => {
                return item.repeating === true;
            });
            return filterImportant(sortCreatedAtSelector(repeatingItems, sorting), important);

        case 'one-time':
            const oneTimeItems = state.filter(item => {
                return item.repeating !== true;
            });
            return filterImportant(sortCreatedAtSelector(oneTimeItems, sorting), important);

        default:
            return state;
    }
}

const sortCreatedAtSelector = (state, sorting) => {
    
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

const filterImportant = (items, important) => {
    switch(important) {
        case 'all':
            return items;
        case 'important':
            return items.filter(item => item.important); 
        case 'unimportant':
            return items.filter(item => !item.important)
        default:
            return items;
    }
}