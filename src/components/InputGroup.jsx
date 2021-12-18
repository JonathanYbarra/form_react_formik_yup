import React from 'react'

export const InputGroup = (props) => {
    const { label, name, value, onChange, inputType, touched, error, onBlur } = props;
    return (
        <>
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                id={name}
                name={name}
                type={inputType}
                className="form-control"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />

            {touched && error && (
                <div className="text-danger">{error}</div>
            )}
        </>
    )
}
