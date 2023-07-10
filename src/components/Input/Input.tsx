import React, { useEffect, useState } from 'react';
import { StyledInput } from './input.styles';
import { Message } from 'react-hook-form/dist/types/errors';

type Props = {
  error?: Message;
  name: string;
  register: any;
  label?: string;
  placeholder?: string;
  type?: 'textarea' | 'text' | 'password'| 'email'| 'url';
};

export const Input = (props: Props) => {
  const { error, name, register, label, placeholder, type } = props;
  const [errorStr, setErrorStr] = useState<string>('');

  useEffect(() => {
    setErrorStr(error || '');
  }, [error]);
  return (
    <StyledInput isError={!!error}>
      <label className={'input-label'}>
        {label && <span className={'input-label__content'}>{label}</span>}
        {type !== 'textarea' ? (
          <input className={'input'} type={type} placeholder={placeholder || label || null} {...register(name)} />
        ) : (
          <textarea
            className={'input textarea'}
            type={type}
            placeholder={placeholder || label || null}
            {...register(name)}
          ></textarea>
        )}
      </label>
      {<span className={'input-error'}>{errorStr}</span>}
    </StyledInput>
  );
};