import { axiosWithAuth } from "../../~reusables/helpers/axiosAuth";

export const GET_QUIZ_AND_QS_UUID = "GET_QUIZ_AND_QS_UUID";
export const CREATE_QUIZ_WITH_QS = "CREATE_QUIZ_WITH_QS";
export const GET_QUIZ_BY_TEAMLEAD_ID = "GET_QUIZ_BY_TEAMLEAD_ID";
export const SELECT_QUIZ_QUESTION = "SELECT_QUIZ_QUESTION";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES";
export const UPDATE_QUIZ_BY_CAT_AND_SUBCAT = "UPDATE_QUIZ_BY_CAT_AND_SUBCAT";
export const CLEAR_QUIZ_STATE = "CLEAR_QUIZ_STATE";

const server = "http://localhost:5005";
// const server = "https://plutoserver.herokuapp.com";

export const getQuizAndQsByUUID = (uuid, history) => async dispatch => {
  try {
    const res = await axiosWithAuth().get(
      `${server}/api/quizzes/create/${uuid}`
    );
    dispatch({ type: GET_QUIZ_AND_QS_UUID, payload: res.data });
    history.push(`/app/quizzes/create/${uuid}`);
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
    }

    dispatch({ type: UPDATE_QUIZ_BY_CAT_AND_SUBCAT, payload: change });
  } catch (err) {
    console.log(err);
  }
};

export const clearQuizState = () => async dispatch => {
  dispatch({ type: CLEAR_QUIZ_STATE })
}
