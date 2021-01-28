import React from 'react';
import {Container, Header, Left, Body, Right, Text} from 'native-base';
import styles from './styles';

const HeaderComponent = () => {
  return (
    // <Container>
      <Header style={styles.header}>
        <Left />
        <Body>
          <Text style={styles.headerText}>Weather App</Text>
        </Body>
        <Right />
      </Header>
    // </Container>
  );
};

export default HeaderComponent;
