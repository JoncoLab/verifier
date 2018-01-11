import React from 'react';
import PropTypes from 'prop-types';

const VerificationType = (props) => {
    return (
        <section className="verification-type">
            <h2 className="verification-name">{props.name}</h2>
            <span className="verification-state">{props.active}</span>
            <p className="verification-desc">{props.desc}</p>
            <span className="verification-city"><span>☻</span> {props.city}</span>
            <section className="verification-details">
                <h2 className="details-name">{props.name}</h2>
                <span className="details-state">{props.active}</span>
                <p className="details-desc">{props.desc}</p>
                <span className="details-city"><span>☻</span> {props.city}</span>
            </section>
        </section>
    );
};

VerificationType.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
};

export default VerificationType;