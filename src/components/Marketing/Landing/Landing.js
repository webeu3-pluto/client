// modules
import React from 'react';
import styled from 'styled-components';

// components/functions
import MarketingHeader from '../../../~reusables/layout/MarketingHeader';
import MarketingFooter from '../../../~reusables/layout/MarketingFooter';
import LandingHero from './LandingHero';
import LandingMain from './LandingMain';

// styles

const Landing = () => {
  return (
    <StyledLanding>
      <MarketingHeader />
        <LandingHero />
        <LandingMain />
      <MarketingFooter />
    </StyledLanding>
  )
}

const StyledLanding = styled.div`
`

export default Landing;