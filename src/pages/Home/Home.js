import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Icon, Button, Text, Container, Content} from 'native-base';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <Container style={styles.homeView}>
      <StatusBar barStyle={'dark-content'} backgroundColor='#ffffff' />
      <Text style={styles.helloText}>Say hello to your new app</Text>
      <Button 
      style={styles.loginBtn}
      rounded
      block
      onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginTxt}>Log In</Text>
      </Button>
      <Button style={styles.signUpBtn}
      rounded
      block
      onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.signUpTxt}>Sign Up</Text>
      </Button>
    </Container>
  )
}

export default Home
