import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TaskInfo extends Component {
    render() {
        return (
            <section className="task-info">
                <span className="task-index">{this.props.index}</span>
                <h3 className="task-caption">{this.props.text}</h3>
            </section>
        )
    }
}

TaskInfo.propTypes = {
    index: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};