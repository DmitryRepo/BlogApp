import React, { useEffect } from 'react';
import { DeepPartial, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { StyledArticleForm } from './article-form.styles';
import { Input } from '../Input/Input';
import { FormValues, validationSchema } from './validation-data';
import { ArticleFormTags } from './ArticleFormTags';

type Props = {
  title: string;
  submitHandler: (data: FormValues) => void;
  errors?: {
    [key: string]: string;
  };
  defaultValues?: DeepPartial<FormValues>;
};

export const ArticleForm = (props: Props) => {
  const { title, submitHandler, errors: propErrors, defaultValues } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    reset,
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  useEffect(() => {
    if (propErrors) {
      const errorNames = Object.keys(propErrors);

      errorNames.forEach((key) => {
        // @ts-ignore
        setError(key, { type: 'custom', message: propErrors[key] });
      });
    }
  }, [propErrors]);

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  return (
    <StyledArticleForm>
      <h2 className={'title'}>{title}</h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          name={'articleTitle'}
          type ={'text'}
          register={register}
          label={'Title'}
          error={errors.articleTitle?.message as string}
        />
        <Input
          name={'description'}
          type ={'text'}
          register={register}
          label={'Short description'}
          error={errors.description?.message as string}
        />
        <Input
          name={'text'}
          register={register}
          label={'Text'}
          type={'textarea'}
          error={errors.text?.message as string}
        />

        <ArticleFormTags
          control={control}
          register={register}
          errors={errors}
          tagError={errors?.tags?.message as string}
        />

        <button type={'submit'} className={'form-submit'}>
          Send
        </button>
      </form>
    </StyledArticleForm>
  );
};
