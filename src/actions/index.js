import QuizQuestion from '../api/QuizQuestion';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const FETCH_NEXT_QUESTIONS = 'FETCH_NEXT_QUESTIONS';
export const FETCH_PREV_QUESTIONS = 'FETCH_PREV_QUESTIONS';
export const FETCH_SELECTED_OPTION = 'FETCH_SELECTED_OPTION';
export const FINAL_RESULT = 'FINAL_RESULT';


export function fetchQuestions() {
  return {
    type: FETCH_QUESTIONS,
    payload:QuizQuestion
  };
}


export function fetchNextQuestions(curr) {
	return {
		 type: FETCH_NEXT_QUESTIONS,
		 payload: curr+1
	}
}

export function fetchPrevQuestions(curr) {
	return {
		 type: FETCH_PREV_QUESTIONS,
		 payload: curr-1
	}
}

export function fecthSelectedoption(option) {
   return {
		 type: FETCH_SELECTED_OPTION,
		 payload: option
	}
}

export function finalResult(score) {
	 return {
		 type: FINAL_RESULT,
		 payload: score
	}
}


