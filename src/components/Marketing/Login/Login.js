// modules
import React from 'react';
import styled from 'styled-components';

// components/functions
import AuthHeader from '../../../~reusables/layout/AuthHeader'

// styles
import { primary } from '../../../~reusables/variables/colors';

const LogIn = () => {
  return (
    <StyledLogin>
      <AuthHeader path="/signup" linkText="Sign up" />
    </StyledLogin>
  )
}

const StyledLogin = styled.div`
  height: 100vh;
  background: ${primary};
`

export default LogIn;