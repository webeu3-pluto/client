import { axiosWithAuth } from "../../~reusables/helpers/axiosAuth";

export const GET_QUIZ_AND_QS_UUID = "GET_QUIZ_AND_QS_UUID";
export const CREATE_QUIZ_WITH_QS = "CREATE_QUIZ_WITH_QS";

const server = "http://localhost:5005";

export const getQuizAndQsByUUID = (uuid) => async dispatch => {
  try {
    const quiz = await axiosWithAuth().get(`${server}/api/quizzes/create/${uuid}`)
    dispatch({ type: GET_QUIZ_AND_QS_UUID, payload: quiz })
  } catch (err) {
    console.log(err);
  }
}

export const createQuizWithQuestion = (uuid, teamLeadId) => async dispatch => {
  try {
    const quiz = await axiosWithAuth().post(`${server}/api/quizzes/create/${uuid}`, { uuid, teamLeadId })
    dispatch({ type: CREATE_QUIZ_WITH_QS, payload: quiz })
  } catch (err) {
    console.log(err);
  }
}