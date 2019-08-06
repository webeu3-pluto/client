import { axiosWithAuth } from "../../~reusables/helpers/axiosAuth";

// team lead specific
export const GET_STUDENTS_BY_COHORT = "GET_STUDENTS_BY_COHORT";
export const ADD_STUDENT_TO_PEOPLE = "ADD_STUDENT_TO_PEOPLE";
export const GET_TEAMLEADS_STUDENTS = "GET_TEAMLEADS_STUDENTS";
export const REMOVE_STUDENT = "REMOVE_STUDENT";

// const server = "https://plutoserver.herokuapp.com";
const server = "http://localhost:5005";

export const getStudentsByCohort = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get(`${server}/api/cohort/students`);
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

export const getTeamLeadStudents = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get(`${server}/api/teamlead/students/data`);
    dispatch({ type: GET_TEAMLEADS_STUDENTS, payload: res.data })
  } catch (err) {
    console.log(err);
  }
}

export const removeStudent = (id) => async dispatch => {
  try {
    const res = await axiosWithAuth().delete(`${server}/api/teamlead/students`, {
      data: { id }
    });
    dispatch({ type: REMOVE_STUDENT, payload: res.data.students })
  } catch (err) {
    console.log(err);
  }
}