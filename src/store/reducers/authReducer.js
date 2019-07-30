const initState = {
  isSignedIn: false,
}

export default function(state = initState, action) {
  console.log(state);
  switch (action.type) {
    default:
      return state;
  }
}