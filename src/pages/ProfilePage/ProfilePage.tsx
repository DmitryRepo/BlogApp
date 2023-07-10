import React, { useState } from 'react';
import * as yup from 'yup';
import { FieldType, LoginForm } from '../../components/LoginForm/LoginForm'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectToken, selectUserData, setUserData } from '../../store/slices/user-slice';
import { updateUser } from '../../services/account/account';
import { Alert } from 'antd';
import { StyledProfilePage } from './profile-page.styles';

const formSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(3, 'Username length should be at least 3 characters'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  newPassword: yup
    .string()
    .notRequired()
    .test('len', 'Password must be between 6 and 40 characters', (val) => {
      return val ? val.length >= 6 && val.length <= 40 : true;
    }),
  avatar: yup.string().url().notRequired(),
});

type FormValues = yup.InferType<typeof formSchema>;

const formFields: FieldType[] = [
  {
    label: 'Username',
    name: 'username',
    type:'text',
  },
  {
    label: 'Email address',
    name: 'email',
    type:'email',
  },
  {
    label: 'New Password',
    name: 'newPassword',
    type:'text',
  },
  {
    label: 'Avatar image (url)',
    name: 'avatar',
    type:'url',
  },
];

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);
  const token = useAppSelector(selectToken);

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const onSubmit = async (data: FormValues) => {
    if (token) {
      const { email, username, avatar, newPassword } = data;
      const editedFields = {
        email,
        username,
        image: avatar || undefined,
        password: newPassword || undefined,
      };

      const response = await updateUser(editedFields, token);

      if (response.type === 'IS_TAKEN') {
        setErrors(response.data.errors);
      } else {
        dispatch(setUserData(response.data.user));

        setShowSuccess(true);

        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }
    }
  };

  return (
    <StyledProfilePage>
      <LoginForm
        mode={'onSubmit'}
        submitHandler={onSubmit}
        title={'Edit Profile'}
        buttonText={'Save'}
        validationSchema={formSchema}
        fieldsData={formFields}
        defaultValues={{
          ...userData,
          newPassword: '',
        }}
        errors={errors}
      />
      {showSuccess && (
        <div className={'success-message'}>
          <Alert message="Success" description={'Data updated successful'} type="success" showIcon />
        </div>
      )}
    </StyledProfilePage>
  );
};