import React from "react";

const FormTextInput = (props) => {
    return (
        <div className="form__input-block">
            <label className="form__label" htmlFor={props.inputId}>{props.label}</label>
            <input className="form__input"
                   id={props.inputId}
                   name={props.name}
                   placeholder={props.placeholder}
                   ref={props.inputRef}/>
        </div>
    )
};

export default FormTextInput;