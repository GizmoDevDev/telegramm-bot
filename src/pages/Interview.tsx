import {useRouter, Text} from "@urban-bot/core";
import React from "react";
import {getInterview} from "../interview/getInterview";
import {InterviewDialog} from "../components/InterviewDialog";

export const Interview = () => {
  const {activePath, navigate} = useRouter();
  const id = activePath.slice(1);
  const interview = getInterview(`interview-${id}`)
  if (interview === undefined) {
    navigate('/');
    return <Text>Интервью с таким id не существует</Text>
  }
  return <InterviewDialog interviewQuestions={interview.questions} isAnonymous={interview.isAnonymous} />
}