import React from 'react';
import { connect } from 'react-redux';

const Item = ({item}) => {

    return (
        <div>
            {item.text}
        </div>
    )
}

const Items = ({items}) => {
    
    return (
        <div>
            {items.map(item => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        items: state.items
    }
}

export default connect(mapStateToProps, null)(Items);