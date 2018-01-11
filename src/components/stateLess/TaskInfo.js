import React from 'react';
import PropTypes from 'prop-types';

const TaskInfo = (props) => {
    return (
        <section className="task-info">
            <span className="task-index">{props.index}</span>
            <h3 className="task-caption">{props.text}</h3>
            <img className="task-bg" src="../../img/logo_decor.svg"/>
        </section>
    )
};

TaskInfo.propTypes = {
    index: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};

export default TaskInfo