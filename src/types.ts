export enum QuestionType {
  SimpleQuestion = 'SimpleQuestion',
  SelectQuestion = 'SelectQuestion',
  RateQuestion = 'RateQuestion'
}

type Question = {
  type: QuestionType,
  question: string,
}

export type SimpleQuestion = Question & {
  type: QuestionType.SimpleQuestion,
  answerLength?: {
    min?: number,
    max?: number,
  }
}

export type SelectQuestion = Question & {
  type: QuestionType.SelectQuestion,
  options: string[],
}


export type RateQuestion = Question & {
  type: QuestionType.RateQuestion,
  rateDiapason: number,
}

export type InterviewQuestion = SimpleQuestion | SelectQuestion | RateQuestion;

export type Interview = {
  questions: InterviewQuestion[],
  isAnonymous: boolean,
  title: string,
}