import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredCollegeName, setEnteredCollegeName] = useState('')
  const [collegeNameIsvalid, setcollegeNameIsvalid] = useState()
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);



  useEffect(() => {
    setFormIsValid(
    enteredEmail.includes('@') && enteredCollegeName.trim().length > 6 &&enteredPassword.trim().length > 6
  );
}, [enteredEmail, enteredCollegeName, enteredPassword])
  
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const schoolNameHandler = (event) => {
    setEnteredCollegeName(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  }
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validateSchoolNameHandler = () => {
    setcollegeNameIsvalid(enteredCollegeName.trim().length > 6)
  }

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredCollegeName, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${
            collegeNameIsvalid === false ? classes.invalid : ''
          }`}>
        <label htmlFor="collegeName">College Name</label>
        <input type="text"
         id="collegeName"
         value={enteredCollegeName}
         onChange={schoolNameHandler}
         onBlur={validateSchoolNameHandler}
         />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
