import * as types from "../actions/authActions";

const initState = {
  isSignedIn: null,
  authLoader: null,
  authError: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case types.VALIDATE_USER:
      return {
        ...state,
        user: action.payload.user,
        isSignedIn: action.payload.status
      };
    case types.SIGN_UP:
      return {
        ...state,
        authLoader: true,
        authError: null
      };
    case types.LOG_IN:
      return {
        ...state,
        authLoader: true,
        authError: null
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
        authLoader: false,
        authError: null
      };
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
        authLoader: false,
        authError: null
      };
    case types.SIGN_UP_FAILURE:
      return {
        ...state,
        isSignedIn: false,
        authLoader: false,
        authError: action.payload
      };
    case types.LOG_IN_FAILURE:
      return {
        ...state,
        isSignedIn: false,
        authLoader: false,
        authError: action.payload
      };
    default:
      return state;
  }
}
