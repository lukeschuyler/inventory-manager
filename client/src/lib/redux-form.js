import React from 'react'

export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const comparePassword = (value, allValues) =>
  allValues.password !== value ? 'Passwords do not match' : undefined;

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  let className = input.value && !error && !warning ?
                  'form-control is-valid'
                  : (error && error !== 'Required' ? 'form-control is-invalid' : 'form-control');
  return (
    <div className="form-group row">
      <label className="form-control-label">{label}</label>
      <div>
        <input className={className} {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );

}
