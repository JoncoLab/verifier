import React, {Component} from 'react';
import classSet from 'react-classset';

class TypeSelect extends Component {
    render() {
        const typeSelectClass = classSet({
            'type-select': true
        });
        return (
            <button type="button"
                className={typeSelectClass}>
                <img src={this.props.src}/>
            </button>
        );
    }
}

export default TypeSelect