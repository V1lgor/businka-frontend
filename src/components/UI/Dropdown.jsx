import React from 'react';

import PropTypes from 'prop-types';

const Dropdown = (props) => {
    return (
        <select className={"input__select"}
                name={props.name}
                value={props.value}
                onChange={props.onChange}>
            {props.options.map(option => <option key={option.value}
                                                 value={option.value}>{option.displayValue}</option>)}
        </select>
    );
};

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.any,
    options: PropTypes.array.isRequired
};

export default Dropdown;
