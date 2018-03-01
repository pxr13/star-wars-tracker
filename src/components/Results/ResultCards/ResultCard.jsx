import React from 'react';
import { func, string, shape } from 'prop-types';

import {
  Container,
  HeaderContainer,
  HeaderBackground,
  Header,
  List,
  ListItem,
  ItemTitle
} from './ResultCardStyles.jsx';

const ResultCard = ({ handleClick, data, idx }) => {
  const { Name, Type, ...rest } = data;

  return (
    <Container>
      <HeaderBackground onClick={() => handleClick(Type, idx)} type={Type}>
        <HeaderContainer>
          <Header>{Name}</Header>
        </HeaderContainer>
      </HeaderBackground>
      <List>
        {Object.entries(rest).map(([title, val]) => {
          return (
            <ListItem key={`${title}-${val}`}>
              <ItemTitle>{title}: </ItemTitle> {val}
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

ResultCard.propTypes = {
  handleClick: func.isRequired,
  data: shape({
    // All
    Name: string.isRequired,

    //People
    Species: string,
    Homeworld: string,
    Language: string,
    Population: string,

    // Planets
    Terrain: string,
    Climate: string,

    // Vehicles
    Model: string,
    Class: string,
    Passengers: string
  })
};

export default ResultCard;
