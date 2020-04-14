import React from 'react';
import useForm from '../lib/useForm';
import FormStyles from './styles/FormStyles';
import Title from './Title';




const Signin = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: 'bb@gmail.com',
    password: '123456',
  });

  return (
    <FormStyles
      method="post"
      onSubmit={async e => {
        e.preventDefault();
        // await signin();
        resetForm();
      }}
    >
      <fieldset>
        <Title title="Se Connecter" center />
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            autoComplete="password"
          />
        </label>
        <button type="submit">Se Connecter!</button>
      </fieldset>
    </FormStyles>
  );
};

export default Signin;
