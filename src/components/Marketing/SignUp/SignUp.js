// modules
import React from 'react';
import styled from 'styled-components';

// components/functions
import AuthHeader from '../../../~reusables/layout/AuthHeader'
import SignUpForm from './SignUpForm';

// styles
import { primary } from '../../../~reusables/variables/colors';

const SignUp = () => {
  return (
    <StyledSignup>
      <AuthHeader path="/login" linkText="Log in" />
      <SignUpForm />
    </StyledSignup>
  )
}

const StyledSignup = styled.div`
  height: 100vh;
  background: ${primary};
`

export default SignUp;