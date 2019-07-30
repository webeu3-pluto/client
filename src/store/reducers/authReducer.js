import { SIGN_UP, LOG_IN, VALIDATE_USER } from "../actions/authActions";

const initState = {
  isSignedIn: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case VALIDATE_USER:
      return { ...state, isSignedIn: action.payload };
    case SIGN_UP:
      return { ...state, isSignedIn: true, user: action.payload };
    case LOG_IN:
      return { ...state, isSignedIn: true, user: action.payload };
    default:
      return state;
  }
}
