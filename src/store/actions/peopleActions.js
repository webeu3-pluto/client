import { axiosWithAuth } from "../../~reusables/helpers/axiosAuth";

// team lead specific
export const GET_STUDENTS_BY_COHORT = "GET_STUDENTS_BY_COHORT";
export const ADD_STUDENT_TO_PEOPLE = "ADD_STUDENT_TO_PEOPLE";
export const GET_TEAMLEADS_STUDENTS = "GET_TEAMLEADS_STUDENTS";
export const REMOVE_STUDENT = "REMOVE_STUDENT";

// student specific
export const GET_TEAMLEADS_BY_COHORT = "GET_TEAMLEADS_BY_COHORT";
export const ADD_TEAMLEAD_TO_PEOPLE = "ADD_TEAMLEAD_TO_PEOPLE";
export const GET_STUDENTS_TEAMLEADS = "GET_STUDENTS_TEAMLEADS";
export const REMOVE_TEAMLEAD = "REMOVE_TEAMLEAD"

const server = "https://plutoserver.herokuapp.com";
// const server = "http://localhost:5005";


// Team Leads
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
    const res = await axiosWithAuth().get(`${server}/api/teamlead/students/data`);
    dispatch({ type: ADD_STUDENT_TO_PEOPLE, payload: res.data })
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

// Students
export const getTeamLeadsByCohort = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get(`${server}/api/cohort/teamleads`);
    dispatch({ type: GET_TEAMLEADS_BY_COHORT, payload: res.data })
  } catch (err) {
    console.log(err);
  }
}

export const addTeamLeadToPeople = (id) => async dispatch => {
  try {
    await axiosWithAuth().post(`${server}/api/student/teamleads`, { id });
    const res = await axiosWithAuth().get(`${server}/api/student/teamleads/data`);
    dispatch({ type: ADD_TEAMLEAD_TO_PEOPLE, payload: res.data })
  } catch (err) {
    console.log(err);
  }
}

export const getStudentsTeamLeads = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get(`${server}/api/student/teamleads/data`);
    dispatch({ type: GET_STUDENTS_TEAMLEADS, payload: res.data })
  } catch (err) {
    console.log(err);
  }
}

export const removeTeamLead = (id) => async dispatch => {
  try {
    const res = await axiosWithAuth().delete(`${server}/api/student/teamleads`, {
      data: { id }
    });
    dispatch({ type: REMOVE_TEAMLEAD, payload: res.data.teamleads })
  } catch (err) {
    console.log(err);
  }
}