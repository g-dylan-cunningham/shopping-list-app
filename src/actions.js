

const addItem = (data) => {
    console.log("action called")
    return {
        type: 'ADD_ITEM',
        text: 'test working',
        repeating: true
    }
}

export { addItem };