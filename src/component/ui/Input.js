import React from "react";

export const Input = ({label, input, meta: { touched, error }}) => {

    return (
        <div className="register_input">
            <input
                label={label}
                placeholder={label}
                {...input}
            />
            <span>{touched && ((error && <div>{error}</div>))}</span>
        </div>
    )
}


