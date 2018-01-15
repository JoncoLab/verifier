import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ConstField extends Component {
    render() {
        return (
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
    }
}

ConstField.propTypes = ({
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    remove: PropTypes.bool.isRequired
});

export default ConstField;