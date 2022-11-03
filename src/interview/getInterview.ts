import {interviews} from "./intreview";

export const getInterview = (id: string) => {
  return interviews[id];
}