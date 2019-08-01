import * as types from "../actions/peopleActions";

const initState = {
  peopleByCohort: []
};

export default function(state = initState, action) {
  switch(action.type) {
    case types.GET_STUDENTS_BY_COHORT:
      return {...state, peopleByCohort: action.payload}
    default:
      return state;
  }
}