import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import SIGN_UP from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', phone: '', password: '' });
  const [signUp] = useMutation(SIGN_UP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await signUp({
      variables: {
        fullName: formState.fullName,
        email: formState.email,
        phone: formState.phone,
        password: formState.password,
        
       
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="fullName">full Name:</label>
          <input
            placeholder="Last"
            name="fullName"
            type="fullName"
            id="fullName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="tel">Phone Number:</label>
          <input
            placeholder="phone"
            name="phone"
            type="tel"
            id="phone"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
