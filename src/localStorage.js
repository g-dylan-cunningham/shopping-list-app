


export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('shoppingList');
        if(serializedState === null) {
            return undefined;
        }
        // console.log("serializedState", serializedState);
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export const saveState = (state) => {

    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('shoppingList', serializedState)
    } catch (e) {
        console.log(e);
    }
}


