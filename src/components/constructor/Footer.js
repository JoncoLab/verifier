import React, {Component} from 'react';
import TypeSelect from './TypeSelect';

class Footer extends Component {
    render() {
        return (
            <div className="first-form-footer">
                <h2>ДОБАВИТЬ ПОЛЕ</h2>
                <span className="current-type">Выберите тип поля: {this.props.data}</span>
                <div className="available-types">

                </div>
                <button className="add-input">+ ADD</button>
            </div>
        );
    }
}

export default Footer;