import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../actions'

const AddItem = ({ addItem }) => {

    let input;
    let repeatingCheck;
    let importantCheck;
    return (
        <div>
           <h1>Add an Item</h1>
           <form
                onSubmit={(e)=> {
                    e.preventDefault();
                    addItem({
                        text: input.value, 
                        repeating: repeatingCheck.checked,
                        important: importantCheck.checked
                    });
                    input.value = '';
                    repeatingCheck.checked = false;
                }}
           >
               <div>
                    <label htmlFor='item-input'>Item Name</label>
                    <input id='item-input' ref={node => input = node} type='text'/>
                </div>
                <div>
                    <label htmlFor='is-repeating'>Repeats?</label>
                    <input id='is-repeating' ref={node => repeatingCheck = node} type='checkbox' />
                </div>
                <div>
                    <label htmlFor='is-importaint'>Important?</label>
                    <input id='is-importaint' ref={node => importantCheck = node} type='checkbox' />
                </div>
                <div>
                    <button type='submit' >Add Item</button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        addItem: (data) => {
            dispatch(actionCreator.addItem(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddItem);