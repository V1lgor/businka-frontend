import React from 'react';
import PropTypes from 'prop-types';

const formConfigExample = [
    {
        type: "text",
        label: "Имя:",
        placeholder: "Введите имя",
        defaultValue: "",   // Optional

    },
    {
        type: "dropdown",
        label: "Страна",
        options: [
            {
                name: "Russia",
                value: 1
            },
            {
                name: "USA",
                value: 2
            }
        ],
        valueSelectedByDefault: 1   // Optional
    }
]


const Form = (props) => {

    const generateFormFieldList = () => {

    }

    return (
        <form>

        </form>
    );
};

Form.propTypes = {

}