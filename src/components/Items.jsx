import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import { getVisibleItems } from '../reducers';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const Item = ({item, deleteItem}) => {

    const baseStyle = {
        width: '50%',
        position: 'relative',
        padding: '5px 5px',
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <div
            style={item.repeating ? {backgroundColor: 'yellow', ...baseStyle} : baseStyle}
        >
            <div>{item.text}</div>
            <div>{moment(item.createdAt).fromNow()}</div>{" "}
            <div><button onClick={() => deleteItem(item.id)}>delete</button></div>
        </div>
    )
}

const Items = ({items, deleteItem}) => {
    
    return (
        <div>
            <h2>Your List:</h2>
            {items.map(item => {
                return <Item key={item.id} item={item} deleteItem={deleteItem}/>
            })}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const {match: {params: {filter}}} = ownProps;
    return {
        items: getVisibleItems(state.items, filter)
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        deleteItem: (id) => {
            dispatch(actionCreators.deleteItem(id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Items));