import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({ handleChange, ...otherProps }) => (
    <input className="form-control" onChange={handleChange} {...otherProps} />
)

export default FormInput;