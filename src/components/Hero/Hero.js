import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {pdf} from '../../constants/constants';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        An inquisitive and a passionate Programmer and a Web Developer interested in
        Software Engineering, Web Development and Data Science positions.
        <br/>
        A motivated, reliable, and enthusiastic individual with an ability to deliver
        projects and offer solutions by using professional practices and a range of
        analysis techniques.
        </SectionText>
        <Button >      <a href={pdf} target="_blank" rel="noreferrer" style={{color: 'black'}}>
        View CV
      </a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;