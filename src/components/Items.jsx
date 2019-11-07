import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const Item = ({item, deleteItem}) => {

    const baseStyle = {
        width: '50%'
    }

    return (
        <div
            style={item.repeating ? {backgroundColor: 'yellow', ...baseStyle} : baseStyle}
        >
            <span>{item.text}</span>
            <button onClick={() => deleteItem(item.id)}>delete</button>
        </div>
    )
}

const Items = ({items, deleteItem}) => {
    
    return (
        <div>
            {items.map(item => {
                return <Item key={item.id} item={item} deleteItem={deleteItem}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        deleteItem: (id) => {
            dispatch(actionCreators.deleteItem(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);