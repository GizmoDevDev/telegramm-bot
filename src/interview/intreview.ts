import {Interview, QuestionType} from "../types";

export const interviews: Record<string, Interview> = {
  'interview-25297599329430054': {
    title: 'Простой опрос',
    isAnonymous: true,
    questions: [
      {
        type: QuestionType.RateQuestion,
        question: 'Как вы оцените текущее видео?',
        rateDiapason: 10,
      },
      {
        type: QuestionType.SelectQuestion,
        question: 'Какое видео вы бы хотели видеть следующим',
        options: [
          'Создание простой игры',
          'Разбор тестового задания',
          'Прохождение собеседования',
          'Разбор какого-нибудь популярного фрэймворка'
        ]
      },
      {
        type: QuestionType.SimpleQuestion,
        question: 'Чтобы вы улучшили?',
      },
      {
        type: QuestionType.SimpleQuestion,
        question: 'Какую технологию вы изучали последней?',
        answerLength: {
          min: 2,
        }
      },
    ],
  },
  'interview-5371520641082321': {
    title: 'Тест на javascript',
    isAnonymous: false,
    questions: [
      {
        type: QuestionType.SimpleQuestion,
        question: 'Как называется метод для поиске в массиве хотя бы одного элемента, соответствующего условию',
      },
      {
        type: QuestionType.SelectQuestion,
        question: 'Какой метод надо использовать, если вы хотите преобразовать все элементы в массиве, создав новый массив',
        options: [
          'array.forEach(...)',
          'array.filter(...)',
          'array.map(...)',
          'array.reduce(...)'
        ]
      },
    ],
  }
}