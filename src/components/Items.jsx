import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import { getVisibleItems } from '../reducers';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const Item = ({item, deleteItem, toggleItemImportant}) => {

    const itemStyle = {
        backgroundColor: item.repeating ? 'yellow' : '',
        position: 'relative',
        padding: '5px 5px',
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: item.important ? '800' : '400'
    }

    const fieldStyle = (percent) => ({
        width: `${percent}%`
    })

    return (
        <div style={itemStyle}>
            <div style={fieldStyle(35)}>{item.text}</div>
            <div style={fieldStyle(20)}>{moment(item.createdAt).fromNow()}</div>{" "}
            <div style={fieldStyle(20)}><button onClick={() => deleteItem(item.id)}>delete</button></div>
            <div style={fieldStyle(20)}><button onClick={() => toggleItemImportant(item.id)}>important</button></div>
        </div>
    )
}

const Items = ({items, deleteItem, toggleItemImportant}) => {
    
    return (
        <div>
            <h2>Your List:</h2>
            {items.map(item => {
                return <Item key={item.id} item={item} deleteItem={deleteItem} toggleItemImportant={toggleItemImportant}/>
            })}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const {match: {params: {filter, sorting, important}}} = ownProps;
    return {
        items: getVisibleItems(state.items, filter, sorting, important)
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        deleteItem: (id) => {
            dispatch(actionCreators.deleteItem(id))
        },
        toggleItemImportant: (id) => {
            dispatch(actionCreators.toggleItemImportant(id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Items));