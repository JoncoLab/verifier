import React from 'react';
import PropTypes from 'prop-types';

const Order = (props) => {
    return (
        <section className="verification-type">
            <h2 className="verification-name">{props.orderName}</h2>
            <span className="verification-state">{props.status}</span>
            <p className="verification-desc">{props.orderComment}</p>
            <span className="verification-city"><span>☻</span> {props.verifAddr}</span>
            <section className="verification-details">
                <h2 className="details-name">{props.orderName}</h2>
                <span className="details-state">{props.status}</span>
                <p className="details-desc">{props.orderComment}</p>
                <span className="details-city"><span>☻</span> {props.verifAddr}</span>
            </section>
        </section>
    );
};

Order.propTypes = {
    orderName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    orderComment: PropTypes.string.isRequired,
    verifAddr: PropTypes.string.isRequired,
    orderId: PropTypes.number.isRequired,
    orderRate: PropTypes.number.isRequired,
    orderRating: PropTypes.number.isRequired,
    orderCreatedAt: PropTypes.number.isRequired
};

export default Order;