import { v4 } from 'node-uuid';
import moment from 'moment'
const addItem = (data) => {
    return {
        type: 'ADD_ITEM',
        id: v4(),
        createdAt: moment(),
        text: data.text,
        repeating: data.repeating,
        important: data.important
    }
}

const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id
    }
}

const toggleItemImportant = (id) => {
    return {
        type: 'TOGGLE_ITEM_IMPORTANT',
        id
    }
}

export { addItem, deleteItem, toggleItemImportant };