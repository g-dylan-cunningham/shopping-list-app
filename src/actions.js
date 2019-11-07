import { v4 } from 'node-uuid';

const addItem = (data) => {
    return {
        type: 'ADD_ITEM',
        id: v4(),
        text: data.text,
        repeating: data.repeating
    }
}

const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id
    }
}

export { addItem, deleteItem };