import React, {Component} from 'react';

class TypeSelect extends Component {
    render() {
        return (
            <button type="button"
                className={this.props.btnClass}>
                {this.props.text}
            </button>
        );
    }
}

export default TypeSelect