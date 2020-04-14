import React from 'react';
import useForm from '../lib/useForm';
import FormStyles from './styles/FormStyles';
import Title from './Title';

// // TODO! GO further
// const SIGNUP_MUTATION = gql`
//   mutation SIGNUP_MUTATION(
//     $email: String!
//     $username: String!
//     $password: String!
//   ) {
//     register(
//       input: { email: $email, username: $username, password: $password }
//     ) {
//       user {
//         id
//         username
//         email
//       }
//       jwt
//     }
//   }
// `;

// resetForm,
const Signup = () => {
  const { inputs, handleChange, clearForm } = useForm({
    username: '',
    email: '',
    password: '',
  });
  const isEmpty = !inputs.username || !inputs.email || !inputs.password;


  const handleSubmit = async e => {
    e.preventDefault();
    clearForm();
  };
  return (
    <FormStyles method="post" onSubmit={handleSubmit}>
      <fieldset>
        <Title title="Créer un Compte" center />

        {isEmpty && (
          <p className="form-empty">Pense à remplir tous les champs</p>
        )}
        {/* {error && <p>Error: {error.message}</p>} */}
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
            autoComplete="name"
          />
        </label>
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
            autoComplete="new-password"
          />
        </label>
        {!isEmpty && <button type="submit">S'inscrire!</button>}
      </fieldset>
    </FormStyles>
  );
};

export default Signup;
