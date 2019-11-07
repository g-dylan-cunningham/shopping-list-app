import { v4 } from 'node-uuid';

const addItem = (data) => {
    return {
        type: 'ADD_ITEM',
        id: v4(),
        text: data.text,
        repeating: data.repeating
    }
}

export { addItem };