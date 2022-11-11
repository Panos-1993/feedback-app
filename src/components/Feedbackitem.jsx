import { FaTimes } from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function Feedbackitem({ item, handleDelete}) {
    return (
        <Card>
            <div className="num-dislay">{item.rating}</div>
            <button className="close">
                <FaTimes onClick={() => handleDelete(item.id)} color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

Feedbackitem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Feedbackitem