import React, { useEffect, useState } from 'react';
import { StyledInput } from './input.styles';
import { Message } from 'react-hook-form/dist/types/errors';

type Props = {
  error?: Message;
  name: string;
  register: any;
  label: string;
};

export const Input = (props: Props) => {
  const { error, name, register, label } = props;
  const [errorStr, setErrorStr] = useState<string>('');

  useEffect(() => {
    setErrorStr(error || '');
  }, [error]);

  return (
    <StyledInput isError={!!error}>
      <label className={'input-label'}>
        <span className={'input-label__content'}>{label}</span>
        <input className={'input'} placeholder={label} {...register(name)} />
      </label>
      {<span className={'input-error'}>{errorStr}</span>}
    </StyledInput>
  );
};
