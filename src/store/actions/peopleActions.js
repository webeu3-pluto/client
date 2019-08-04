import { axiosWithAuth } from "../../~reusables/helpers/axiosAuth";
export const GET_STUDENTS_BY_COHORT = "GET_STUDENTS_BY_COHORT";
export const ADD_STUDENT_TO_PEOPLE = "ADD_STUDENT_TO_PEOPLE";

const server = "https://plutoserver.herokuapp.com";
// const server = "http://localhost:5005";

export const getStudentsByCohort = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get(`${server}/api/teamlead/students`);
    dispatch({ type: GET_STUDENTS_BY_COHORT, payload: res.data })
  } catch (err) {
    console.log(err);
  }
}

export const addStudentToPeople = (id) => async dispatch => {
  try {
    await axiosWithAuth().post(`${server}/api/teamlead/students`, { id });
    dispatch({ type: ADD_STUDENT_TO_PEOPLE })
  } catch (err) {
    console.log(err);
  }
}