import * as types from "../actions/peopleActions";

const initState = {
  peopleByCohort: [],
  peopleByUser: []
};

export default function(state = initState, action) {
  switch (action.type) {
    // students
    case types.REMOVE_TEAMLEAD:
      return { ...state, peopleByUser: action.payload };
    case types.GET_TEAMLEADS_BY_COHORT:
      return { ...state, peopleByCohort: action.payload };
    case types.ADD_TEAMLEAD_TO_PEOPLE:
      return { ...state, peopleByUser: action.payload };
    case types.GET_STUDENTS_TEAMLEADS:
      return { ...state, peopleByUser: action.payload };
    // team lead
    case types.REMOVE_STUDENT:
      return { ...state, peopleByUser: action.payload };
    case types.GET_TEAMLEADS_STUDENTS:
      return { ...state, peopleByUser: action.payload };
    case types.GET_STUDENTS_BY_COHORT:
      return { ...state, peopleByCohort: action.payload };
    case types.ADD_STUDENT_TO_PEOPLE:
      return { ...state, peopleByUser: action.payload };
    default:
      return state;
  }
}
