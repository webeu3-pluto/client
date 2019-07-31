import axios from "axios";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const VALIDATE_USER = "VALIDATE_USER";

const server = "https://plutoserver.herokuapp.com";

export const signUp = (user, history) => async dispatch => {
  const res = await axios.post(`${server}/api/auth/register`, user);
  dispatch({ type: SIGN_UP })

  // to do - grab token
  if (res.status === 201) {
    const user = {
      firstName: "Isaac",
      lastName: "Aderogba",
      role: 'Team Lead',
      cohort: 'WEBEU3',
      email: "isaacaderogba1@gmail.com",
    };

    dispatch({ type: SIGN_UP_SUCCESS, payload: user })

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(user))

    history.push("/app");
  }
};

export const validateUser = () => dispatch => {
  let token = localStorage.getItem('token');
  if(token) {
    let user = JSON.parse(localStorage.getItem('user'));
    dispatch({ type: VALIDATE_USER, payload: {user, status: true} })
  } else {
    dispatch({ type: VALIDATE_USER, payload: {status: false} })
  }
}

export const logIn = (user, history) => async dispatch => {
  try {
    dispatch({ type: LOG_IN })
    const res = await axios.post(`${server}/api/auth/login`, user);

    if (res.status === 200) {
      const user = {
        firstName: "Isaac",
        lastName: "Aderogba",
        role: 'Team Lead',
        cohort: 'WEBEU3',
        email: "isaacaderogba1@gmail.com",
      };

      dispatch({ type: LOG_IN_SUCCESS, payload: user })

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user))

      history.push("/app");
    }
  } catch (err) {
    console.log(err);
    // dispatch({ type: LOG_IN_FAILURE, payload: res.data })

  }
};
