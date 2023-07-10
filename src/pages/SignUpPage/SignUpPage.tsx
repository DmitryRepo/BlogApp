import React, { useState } from 'react';
import * as yup from 'yup';

import { FieldType, LoginForm } from '../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import { registerUser } from '../../services/account/account';
import { useAppDispatch } from '../../store/hooks';
import { setUserData } from '../../store/slices/user-slice';

const formSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password length should be at least 6 characters')
    .max(40, 'Password cannot exceed more than 40 characters'),
  cpassword: yup
    .string()
    .required('Confirm Password is required')
    .min(6, 'Password length should be at least 6 characters')
    .max(40, 'Password cannot exceed more than 40 characters')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username length should be at least 3 characters')
    .max(20, 'Username cannot exceed more than 20 characters'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  personal: yup.boolean().oneOf([true], 'You have to accept an agreement'),
});

type FormValues = yup.InferType<typeof formSchema>;

const formFields: FieldType[] = [
  {
    label: 'Username',
    name: 'username',
    type:'text'
  },
  {
    label: 'Email address',
    name: 'email',
    type:'email',

  },
  {
    label: 'Password',
    name: 'password',
    type:'text',
  },
  {
    label: 'Repeat Password',
    name: 'cpassword',
    type:'text',
  },
];

export const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState({});

  const onSubmit = async (data: FormValues) => {
    const { username, email, password } = data;

    const response = await registerUser({
      username,
      email,
      password,
    });

    if (response.type === 'IS_TAKEN') {
      setErrors(response.data.errors);
    } else {
      dispatch(setUserData(response.data.user));
    }
  };

  return (
    <>
      <LoginForm
        submitHandler={onSubmit}
        title={'Create new account'}
        buttonText={'Create'}
        validationSchema={formSchema}
        fieldsData={formFields}
        needDataAgree
        helpText={
          <>
            Already have an account? <Link to={'/sign-in'}>Sign In</Link>.
          </>
        }
        errors={errors}
      />
    </>
  );
};
