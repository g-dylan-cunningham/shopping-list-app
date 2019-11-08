import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import { getVisibleItems } from '../reducers';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const Item = ({item, deleteItem}) => {

    const itemStyle = {
        backgroundColor: item.repeating ? 'yellow' : '',
        position: 'relative',
        padding: '5px 5px',
        display: 'flex',
        justifyContent: 'space-between'
    }

    const fieldStyle = (percent) => ({
        width: `${percent}%`
    })

    return (
        <div style={itemStyle}>
            <div style={fieldStyle(40)}>{item.text}</div>
            <div style={fieldStyle(30)}>{moment(item.createdAt).fromNow()}</div>{" "}
            <div style={fieldStyle(30)}><button onClick={() => deleteItem(item.id)}>delete</button></div>
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
    const {match: {params: {filter, sorting}}} = ownProps;
    return {
        items: getVisibleItems(state.items, filter, sorting)
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