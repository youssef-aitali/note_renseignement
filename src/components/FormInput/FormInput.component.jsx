import React from 'react';
import './FormInput.styles.scss';

/* const FormInput = ({ handleChange, ...otherProps }) => (
    <input className="form-control" onChange={handleChange} {...otherProps} />
)
 */
const FormInput = ({ ...otherProps }) => (
    <input className="form-control" {...otherProps} />
)

export default FormInput;