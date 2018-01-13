import React from 'react';
import PropTypes from 'prop-types';

const StatelessInput = () => (
    <fieldset
        className="stateless-input"
        style={{
            display: remove ? 'none' : 'inline-block'
        }}>
        <div className="input-info">
            <h2>ПОЛЕ ЗАЯВКИ</h2>
            <button onClick={onClick}>X Удалить поле</button>
            <div className="input-type">
                <span>Тип поля: {type}</span>
                <button className="input-title">? {title}</button>
                <span className="type-text"><img alt="Type Text"/></span>
                <span className="type-photo"><img alt="Type Photo"/></span>
                <span className="type-video"><img alt="Type Video"/></span>
            </div>
        </div>
    </fieldset>
);

StatelessInput.propTypes = ({
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    remove: PropTypes.bool.isRequired
});

export default StatelessInput;