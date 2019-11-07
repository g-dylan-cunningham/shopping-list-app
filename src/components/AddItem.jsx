import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../actions'

const AddItem = ({ addItem }) => {
    
    return (
        <div>
           <h1>Add an Item</h1>
           <form
                onSubmit={(e)=> {
                    e.preventDefault();
                    addItem();
                }}
           >
               <div>
                    <label htmlFor='item-input'>Item Name</label>
                    <input id='item-input' type='text'/>
                </div>
                <div>
                    <label htmlFor='is-repeating-checkbox'>Repeats?</label>
                    <input id='is-repeating-checkbox' type='checkbox' />
                </div>
                <div>
                    <button type='submit'>Add Item</button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        addItem: () => {
            dispatch(actionCreator.addItem());
        }
    }
}

export default connect(null, mapDispatchToProps)(AddItem);