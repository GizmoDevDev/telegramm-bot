import React from 'react';
import {ButtonGroup, Button} from '@urban-bot/core';

type Props = {
  question: string,
  rateDiapason: number,
  onAnswer: (answer: string | number | undefined) => void,
}

export const RateQuestion =({question, rateDiapason, onAnswer}: Props) => {
  return <ButtonGroup title={question} maxColumns={5} >
    {[...Array(rateDiapason).keys()].map((option) => (
      <Button onClick={() => onAnswer(option)} key={option}>{(option + 1).toString()}</Button>))
    }
  </ButtonGroup>
}