import React from 'react';
import { Control, useFieldArray } from 'react-hook-form';
import { FormValues } from './validation-data';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { StyledArticleFormTags } from './article-form.styles';

type Props = {
  control: Control<FormValues>;
  register: any;
  errors: any;
  tagError: string;
};

export const ArticleFormTags = (props: Props) => {
  const { control, register, errors, tagError } = props;
  const { fields, append, remove } = useFieldArray({
    name: 'tags',
    control,
  });

  const tags = fields.map((field, i) => {
    return (
      <div className={'tag-wrapper'} key={field.id}>
        <Input
          placeholder={'Tag'}
          register={register}
          name={`tags.${i}.name`}
          error={errors?.tags?.[i]?.name?.message as string}
        />
        <Button small error onClick={() => remove(i)}>
          Delete
        </Button>
      </div>
    );
  });

  const addTag = (e: Event) => {
    e.preventDefault();

    append({
      name: '',
    });
  };

  return (
    <StyledArticleFormTags hasTags={!!fields.length}>
      <div className="tag-container">
        <label className={'label'}>Tags</label>
        <div className={'tags'}>{tags}</div>
        <div className={'add-btn-wrapper'}>
          <Button onClick={addTag} primary small>
            Add Tag
          </Button>
        </div>
      </div>
      {tagError && <span className="error">{tagError}</span>}
    </StyledArticleFormTags>
  );
};
