import React from 'react';

interface InputProps {
  inputClassName: string;
  labelClassName: string;
  name: string;
  title: string;
  value: string;
  placeholder: string;
  type: string;
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <>
      <label htmlFor={props.name} className={props.labelClassName}>
        {props.title}
      </label>
      <input
        className={props.inputClassName}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        {...props}
      />
    </>
  );
};

export default Input;
