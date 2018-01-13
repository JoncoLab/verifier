import React from 'react';
import PropTypes from 'prop-types';
import StatelessInput from './StatelessInput';

const CustomFieldset = ({addInputs, onAddInputClick}) => (
    <section className="custom-fieldset">
        {addInputs.map(addInput =>
            <StatelessInput
                key={addInput.id}
                {...addInput}
                onClick={() => onAddInputClick(addInput.id)}
            />
        )}
    </section>
);

CustomFieldset.propTypes = {
    addInputs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            remove: PropTypes.bool.isRequired
        }),
    ),
    onAddInputClick: PropTypes.func.isRequired
};

export default CustomFieldset;