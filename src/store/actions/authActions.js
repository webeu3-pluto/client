import axios from "axios";

export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";
export const VALIDATE_USER = "VALIDATE_USER";

const server = "https://plutoserver.herokuapp.com";

export const signUp = (user, history) => async dispatch => {
  const res = await axios.post(`${server}/api/auth/register`, user);

  // to do - grab token
  if (res.status === 201) {
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
    const res = await axios.post(`${server}/api/auth/login`, user);

    if (res.status === 200) {
      const user = {
        firstName: "Isaac",
        lastName: "Aderogba",
        role: 'Team Lead',
        cohort: 'WEBEU3',
        email: "isaacaderogba1@gmail.com",
      };

      dispatch({ type: LOG_IN, payload: user })

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user))

      history.push("/app");
    }
  } catch (err) {
    console.log(err);
  }
};
