import { useState } from 'react';

interface InitialValues {
  name?: string;
  password?: string;
  title?: string;
  author?: string;
  subject?: string;
  email?: string;
  msg?: string;
  owner?: string;
  type?: string;
  body?: string;
  date?: Date;
}

interface FormProps extends React.Props<any> {
  initialValues: InitialValues;
  render: Function;
  className?: string;
}

const Form = (props: FormProps): JSX.Element => {
  const [state, setState] = useState(props.initialValues);

  const handleChange = (e): void => {
    e.preventDefault();
    const { name } = e.target;
    const { value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e): void => {
    e.preventDefault();
    alert(`
        - SUBMITTING FORM -
        ${JSON.stringify(state, null)}
      `);
  };

  return props.render({ state, handleChange, handleSubmit });
};

export default Form;
