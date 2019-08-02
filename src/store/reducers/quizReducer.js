import * as types from "../actions/quizActions";

const initState = {
  quizzes: [],
  selectedQuiz: null,
  selectedQuestion: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case types.CREATE_QUIZ_WITH_QS:
      return {
        ...state,
        selectedQuiz: action.payload,
        selectedQuestion: action.payload.questions[0]
      };
    case types.GET_QUIZ_AND_QS_UUID:
      return {
        ...state,
        selectedQuiz: action.payload,
        selectedQuestion: action.payload.questions[0]
      };
    default:
      return state;
  }
}
