import React, { useState } from 'react';
import {InterviewQuestion} from "../types";
import {Text, useBotContext} from '@urban-bot/core';
import {Question} from "./Question";

type Props = {
  interviewQuestions: InterviewQuestion[]
  isAnonymous?: boolean
}

export const InterviewDialog = ({interviewQuestions, isAnonymous=true}: Props) => {
  const { chat } = useBotContext();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | undefined | number)[]>([])
  const handleAnswer = (answer: string | undefined | number) => {
    setQuestionIndex((preIndex) => preIndex + 1)
    setAnswers((prevState) => [...prevState, answer])
  }
  if (answers.length === interviewQuestions.length) {
    const personalData = isAnonymous ? {} : {id: chat.id, username: chat.username}
    console.log({answers, ...personalData});
    return <Text>Спасибо за участие в опросе</Text>
  }
  return <>{questionIndex < interviewQuestions.length
    && <Question interviewQuestion={interviewQuestions[questionIndex]} onAnswer={handleAnswer} />}
  </>
}