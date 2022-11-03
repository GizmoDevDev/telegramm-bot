import React, {useState} from 'react';
import {Text, useText} from '@urban-bot/core';

type Props = {
  question: string,
  minLength?: number,
  maxLength?: number,
  onAnswer: (answer: string | number | undefined) => void,
}

export const SimpleQuestion =({question, minLength, maxLength, onAnswer}: Props) => {
  const [message, setMessage] = useState(question)
  useText(({text}) => {
    if (minLength && minLength > text.length) {
      setMessage(`Длина ответа должна быть больше ${minLength}`)
      return
    }
    if (maxLength && maxLength > text.length) {
      setMessage(`Длина ответа должна быть меньше ${maxLength}`)
      return
    }
    onAnswer(text);
  })
  return <Text>{message}</Text>
}