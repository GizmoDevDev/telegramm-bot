import React from 'react';
import {ButtonGroup, Button} from '@urban-bot/core';

type Props = {
  question: string,
  options: string[]
  onAnswer: (answer: string | number | undefined) => void,
}

export const SelectQuestion =({question, options, onAnswer}: Props) => {
  return <ButtonGroup title={question} maxColumns={1}>
    {options.map((option) => (
      <Button onClick={() => onAnswer(option)} key={option}>{option}</Button>))
    }
  </ButtonGroup>
}