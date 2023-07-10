import React, { useState } from 'react';
import * as yup from 'yup';
import { FieldType, LoginForm } from '../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { loginUser } from '../../services/account/account';
import { setUserData } from '../../store/slices/user-slice';

const formSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
  email: yup.string().required('Email is required').email('Email is invalid'),
});

type FormValues = yup.InferType<typeof formSchema>;

const formFields: FieldType[] = [
  {
    label: 'Email address',
    name: 'email',
    type: 'email'
  },
  {
    label: 'Password',
    name: 'password',
    type:'text',
  },
];

export const SignInPage = () => {
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState({});

  const onSubmit = async (data: FormValues) => {
    const { email, password } = data;

    const response = await loginUser(email, password);

    if (response.type === 'AUTH_ERROR') {
      setErrors({
        email: 'invalid email or password',
        password: 'invalid email or password',
      });
    } else {
      dispatch(setUserData(response.data.user));
    }
  };

  return (
    <div>
      <LoginForm
        submitHandler={onSubmit}
        title={'Sign In'}
        buttonText={'Login'}
        validationSchema={formSchema}
        fieldsData={formFields}
        helpText={
          <>
            Don’t have an account? <Link to={'/sign-up'}>Sign Up</Link>.
          </>
        }
        errors={errors}
      />
    </div>
  );
};
