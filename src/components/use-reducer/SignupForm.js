import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeName':
      return { ...state, name: action.payload };
    case 'changeEmail':
      return { ...state, email: action.payload };
    case 'changePassword':
      return { ...state, password: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
};

const SignupForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    dispatch({ type: 'reset' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={state.name}
          onChange={(event) =>
            dispatch({ type: 'changeName', payload: event.target.value })
          }
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={state.email}
          onChange={(event) =>
            dispatch({ type: 'changeEmail', payload: event.target.value })
          }
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={state.password}
          onChange={(event) =>
            dispatch({ type: 'changePassword', payload: event.target.value })
          }
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
