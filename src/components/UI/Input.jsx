import React from 'react';

import PropTypes from 'prop-types';
import Dropdown from "./Dropdown";

// TODO: Add "touched" and "invalid" props

const Input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case 'input': {
            inputElement = <input className="input__input"
                                  name={props.name}
                                  onChange={props.onChange}
                                  value={props.value}
                                  {...props.elementConfig}/>;
            break;
        }
        case 'select': {
            inputElement = <Dropdown name={props.name}
                                     options={props.elementConfig.options}
                                     onChange={props.onChange}
                                     value={props.value}/>
        }

    }


    return (
        <div className="input">
            <label className="input__label">{props.label}</label>
        </div>
    )
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string,
    elementType: PropTypes.string.isRequired,
    elementConfig: PropTypes.object
}