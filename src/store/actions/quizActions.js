import { axiosWithAuth } from "../../~reusables/helpers/axiosAuth";

// team leads
export const GET_QUIZ_AND_QS_UUID = "GET_QUIZ_AND_QS_UUID";
export const CREATE_QUIZ_WITH_QS = "CREATE_QUIZ_WITH_QS";
export const GET_QUIZ_BY_TEAMLEAD_ID = "GET_QUIZ_BY_TEAMLEAD_ID";
export const SELECT_QUIZ_QUESTION = "SELECT_QUIZ_QUESTION";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES";
export const UPDATE_QUIZ_BY_CAT_AND_SUBCAT = "UPDATE_QUIZ_BY_CAT_AND_SUBCAT";
export const CLEAR_QUIZ_STATE = "CLEAR_QUIZ_STATE";
export const UPDATE_QUIZ_STATUS = "UPDATE_QUIZ_STATUS";
export const DELETE_QUESTION_ON_QUIZ = "DELETE_QUESTION_ON_QUIZ";
export const DELETE_QUIZ = "DELETE_QUIZ";
export const CLICK_NEW_QUESTION = "CLICK_NEW_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";

// students
export const GET_QUIZZES_FOR_STUDENT = "GET_QUIZZES_FOR_STUDENT";
export const COMPLETE_QUIZ = "COMPLETE_QUIZ";
export const FETCH_COMPLETED_QUIZ = "FETCH_COMPLETED_QUIZ";

const server = "https://plutoserver.herokuapp.com";

export const getQuizAndQsByUUID = (uuid, history) => async dispatch => {
  try {
    const res = await axiosWithAuth().get(
      `${server}/api/quizzes/create/${uuid}`
    );
    dispatch({ type: GET_QUIZ_AND_QS_UUID, payload: res.data });
    if (history) history.push(`/app/quizzes/create/${uuid}`);
  } catch (err) {
    console.log(err);
  }
};

export const createQuizWithQuestion = (
  uuid,
  teamLeadId,
  history
) => async dispatch => {
  try {
    const res = await axiosWithAuth().post(
      `${server}/api/quizzes/create/${uuid}`,
      { uuid, teamLeadId }
    );
    dispatch({ type: CREATE_QUIZ_WITH_QS, payload: res.data });
    history.push(`/app/quizzes/create/${uuid}`);
  } catch (err) {
    console.log(err);
  }
};

export const getQuizByTeamLeadId = id => async dispatch => {
  try {
    const res = await axiosWithAuth().get(`${server}/api/quizzes/${id}`);
    dispatch({ type: GET_QUIZ_BY_TEAMLEAD_ID, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const selectQuizQuestion = question => async dispatch => {
  dispatch({ type: SELECT_QUIZ_QUESTION, payload: question });
};

export const getCategories = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get(
      `${server}/api/quizzes/create/categories`
    );
    dispatch({ type: GET_CATEGORIES, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const getSubCategories = id => async dispatch => {
  try {
    const res = await axiosWithAuth().get(
      `${server}/api/quizzes/create/subcategories/${id}`
    );
    dispatch({ type: GET_SUBCATEGORIES, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const updateQuizByCatandSubcat = (
  cat_id,
  subcat_id,
  uuid
) => async dispatch => {
  try {
    const reqBody = { cat_id, subcat_id, uuid };
    const res = await axiosWithAuth().put(
      `${server}/api/quizzes/create/${uuid}/categories`,
      reqBody
    );

    const change = {
      category: res.data.category,
      categoryId: res.data.categoryId,
      subCategory: res.data.subCategory,
      subCategoryId: res.data.subCategoryId
    };

    dispatch({ type: UPDATE_QUIZ_BY_CAT_AND_SUBCAT, payload: change });
  } catch (err) {
    console.log(err);
  }
};

export const updateQuizStatus = (published, uuid) => async dispatch => {
  try {
    const reqBody = { published, uuid };
    const res = await axiosWithAuth().put(
      `${server}/api/quizzes/create/${uuid}/published`,
      reqBody
    );
    dispatch({ type: UPDATE_QUIZ_STATUS, payload: res.data.status });
  } catch (err) {
    console.log(err);
  }
};

export const deleteQuestionOnQuiz = ({ id, uuid }) => async dispatch => {
  try {
    const reqBody = { id, uuid };
    const res = await axiosWithAuth().delete(
      `${server}/api/quizzes/create/question/${id}`,
      { data: reqBody }
    );
    dispatch({ type: DELETE_QUESTION_ON_QUIZ, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteQuiz = ({ uuid, history }) => async dispatch => {
  try {
    const reqBody = { uuid };
    const res = await axiosWithAuth().delete(`${server}/api/quizzes/create/`, {
      data: reqBody
    });
    dispatch({ type: DELETE_QUIZ, payload: res.data });
    history.push(`/app/quizzes/`);
  } catch (err) {
    console.log(err);
  }
};

export const clickNewQuestion = () => async dispatch => {
  dispatch({ type: CLICK_NEW_QUESTION });
};

export const saveQuestion = question => async dispatch => {
  try {
    const res = await axiosWithAuth().post(
      `${server}/api/quizzes/create/question/new`,
      question
    );
    dispatch({ type: SAVE_QUESTION, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const updateQuestion = (question, id, uuid) => async dispatch => {
  try {
    const res = await axiosWithAuth().put(
      `${server}/api/quizzes/create/question/${uuid}/${id}`,
      question
    );
    dispatch({ type: UPDATE_QUESTION, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const clearQuizState = () => async dispatch => {
  dispatch({ type: CLEAR_QUIZ_STATE });
};

// students

export const getQuizzesForStudent = id => async dispatch => {
  try {
    const res = await axiosWithAuth().get(
      `${server}/api/quizzes/students/${id}`
    );
    dispatch({ type: GET_QUIZZES_FOR_STUDENT, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const completeQuiz = (studentQuiz, uuid) => async dispatch => {
  try {
    const quizzes = await axiosWithAuth().post(
      `${server}/api/quizzes/complete/${studentQuiz.quiz_id}`,
      studentQuiz
    );
    
    await getQuizAndQsByUUID(uuid);
    
    dispatch({ type: COMPLETE_QUIZ, payload: quizzes.data });

  } catch (err) {
    console.log(err);
  }
};

export const fetchCompletedQuiz = (quiz_id, student_id) => async dispatch => {
  try {
    const res = await axiosWithAuth().get(
      `${server}/api/quizzes/complete/${quiz_id}/${student_id}`
    );

    dispatch({ type: FETCH_COMPLETED_QUIZ, payload: res.data })
    
  } catch (err) {
    console.log(err);
  }
}
