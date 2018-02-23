import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/styles.jsx';
import StoryBtn from './StoryBtn.jsx';
import Title from './Title.jsx';
import NavFavoriteBtn from './NavFavoriteBtn.jsx';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;

  ${media.phone`width: 95%`};
`;

class Nav extends Component {
  render() {
    return (
      <Container>
        <StoryBtn />
        <Title />
        <NavFavoriteBtn />
      </Container>
    );
  }
}

export default Nav;