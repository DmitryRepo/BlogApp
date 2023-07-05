import React from 'react';
import { StyledCheckbox } from './checkbox.styles';

type Props = {
  label?: string;
  error?: string;
  register: any;
  name: string;
};
export const Checkbox = (props: Props) => {
  const { label, register, name, error } = props;

  return (
    <StyledCheckbox isError={!!error}>
      <label className={'label'}>
        <input type="checkbox" {...register(name)} />
        {label ? <span>{label}</span> : null}
      </label>
      <span className={'error'}>{error}</span>
    </StyledCheckbox>
  );
};
