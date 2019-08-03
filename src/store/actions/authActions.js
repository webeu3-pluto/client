import axios from "axios";
import { axiosWithAuth } from "../../~reusables/helpers/axiosAuth";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const VALIDATE_USER = "VALIDATE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

// const server = "https://plutoserver.herokuapp.com";
const server = "http://localhost:5005";

export const signUp = (user, history) => async dispatch => {
  try {
    dispatch({ type: SIGN_UP });
    const res = await axios.post(`${server}/api/auth/register`, user);

    if (res.status === 201) {
      const user = {
        id: res.data.id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        role: res.data.role,
        cohort: res.data.cohort,
        email: res.data.email
      };

      dispatch({ type: SIGN_UP_SUCCESS, payload: user });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      history.push("/app");
    }
  } catch (err) {
    dispatch({ type: SIGN_UP_FAILURE, payload: err.response.data.message });
  }
};

export const logIn = (user, history) => async dispatch => {
  try {
    dispatch({ type: LOG_IN });
    const res = await axios.post(`${server}/api/auth/login`, user);
    if (res.status === 200) {
      const user = {
        id: res.data.id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        role: res.data.role,
        cohort: res.data.cohort,
        email: res.data.email
      };

      dispatch({ type: LOG_IN_SUCCESS, payload: user });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      history.push("/app");
    }
  } catch (err) {
    dispatch({ type: LOG_IN_FAILURE, payload: err.response.data.message });
  }
};

export const validateUser = () => dispatch => {
  let token = localStorage.getItem("token");
  if (token) {
    let user = JSON.parse(localStorage.getItem("user"));
    dispatch({ type: VALIDATE_USER, payload: { user, status: true } });
  } else {
    dispatch({ type: VALIDATE_USER, payload: { user: null, status: false } });
  }
};

export const updateUser = user => async dispatch => {
  try {
    const res = await axiosWithAuth().put(`${server}/api/profile/user`, user);
    dispatch({ type: UPDATE_USER, payload: JSON.parse(res.config.data) });
    localStorage.setItem("user", res.config.data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = () => async dispatch => {
  try {
    await axiosWithAuth().delete(`${server}/api/profile/user`);
    localStorage.clear();
    dispatch({ type: DELETE_USER });
  } catch (err) {
    console.log(err);
  }
};
