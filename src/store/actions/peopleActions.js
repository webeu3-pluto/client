import { axiosWithAuth } from "../../~reusables/helpers/axiosAuth";
export const GET_STUDENTS_BY_COHORT = "GET_STUDENTS_BY_COHORT";

const server = "https://plutoserver.herokuapp.com";

export const getStudentsByCohort = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get(`${server}/api/teamlead/students`);
    dispatch({ type: GET_STUDENTS_BY_COHORT, payload: res.data })
  } catch (err) {
    console.log(err);
  }
}