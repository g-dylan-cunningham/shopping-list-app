import React from 'react';

const AddItem = () => {
    
    return (
        <div>
           <h1>Add an Item</h1>
           <form>
               <div>
                    <label htmlFor='item-input'>Item Name</label>
                    <input id='item-input' type='text'/>
                </div>
                <div>
                    <label htmlFor='is-repeating-checkbox'>Repeats?</label>
                    <input id='is-repeating-checkbox' type='checkbox' />
                </div>
                <div>
                    <button>Add Item</button>
                </div>
            </form>
        </div>
    )
}

export default AddItem;