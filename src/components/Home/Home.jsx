import React, { Component } from 'react';
import styled from 'styled-components';
import { User, Chrome, Send } from 'react-feather';

const getJSXForCategories = () => {
  const icons = {
    People: { color: '#4f5ef5', iconName: User },
    Planets: { color: '#f44c67', iconName: Chrome },
    Vehicles: { color: '#2fca74', iconName: Send }
  };

  const categoriesJSX = Object.keys(icons).map((categoryName) => {
    const iconData = getIconDataFrom(icons, categoryName);
    const categoryJSX = createJSXFrom(iconData);
    return categoryJSX;
  });

  return categoriesJSX;
};

const getIconDataFrom = (icons, categoryName) => {
  const [color, Icon] = [icons[categoryName].color, icons[categoryName].iconName];
  return { color, Icon, categoryName };
};

const createJSXFrom = ({ color, Icon, categoryName }) => {
  return (
    <Category color={color}>
      <Icon size={35} />
      <CategoryName>{categoryName}</CategoryName>
    </Category>
  );
};

const Container = styled.div`
  margin: 120px auto 0;
  display: flex;
  flex-direction: column;
  padding-right: 3.8rem;
`;

const Title = styled.span`
  font-size: 3rem;
  text-align: center;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 4.5rem;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  margin: 0 3rem;
`;

const CategoryName = styled.span`
  font-size: 1.25rem;
  margin-top: 0.6rem;
`;

class Home extends Component {
  render() {
    const categoriesJSX = getJSXForCategories();

    return (
      <Container>
        <Title>Select a category</Title>
        <CategoriesContainer>{categoriesJSX}</CategoriesContainer>
      </Container>
    );
  }
}

export default Home;
