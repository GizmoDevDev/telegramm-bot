import React from 'react';
import {InterviewQuestion, QuestionType} from "../types";
import {SimpleQuestion} from './SimpleQuestion';
import {SelectQuestion} from "./SelectQuestion";
import {RateQuestion} from "./RateQuestion";

type Props = {
  interviewQuestion: InterviewQuestion,
  onAnswer: (answer: string | number | undefined) => void,
}

export const Question = ({interviewQuestion, onAnswer}: Props) => {
  switch (interviewQuestion.type) {
    case QuestionType.SimpleQuestion:
      return <SimpleQuestion
        key={interviewQuestion.question}
        question={interviewQuestion.question}
        onAnswer={onAnswer}
        minLength={interviewQuestion?.answerLength?.min}
        maxLength={interviewQuestion?.answerLength?.max}
      />
    case QuestionType.SelectQuestion:
      return <SelectQuestion
        question={interviewQuestion.question}
        onAnswer={onAnswer}
        options={interviewQuestion.options}
      />
    case QuestionType.RateQuestion:
      return <RateQuestion
        question={interviewQuestion.question}
        onAnswer={onAnswer}
        rateDiapason={interviewQuestion.rateDiapason}
      />
  }
}