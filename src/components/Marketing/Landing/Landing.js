// modules
import React from 'react';
import styled from 'styled-components';

// components/functions
import MarketingHeader from '../../../~reusables/layout/MarketingHeader';
import MarketingFooter from '../../../~reusables/layout/MarketingFooter';
import LandingHero from './LandingHero';
import LandingMain from './LandingMain';
import { medium_space_1, medium_space_3 } from '../../../~reusables/variables/spacing';

// styles

const Landing = () => {
  return (
    <StyledLanding>
      <MarketingHeader />
      <div className="body">
        <LandingHero />
        <LandingMain />
      </div>
      <MarketingFooter />
    </StyledLanding>
  )
}

const StyledLanding = styled.div`
  .body {
    max-width: 1280px;
    padding: 0 ${medium_space_3};
    margin: 0 auto;
  }
`

export default Landing;