import React from 'react';
import { StatusBar } from 'react-native';
import styles from './styles';
import {
  Text,
  Container
} from 'native-base'

const Login = () => {
  return (
    <Container style={styles.loginView}>
      <StatusBar barStyle={'dark-content'} backgroundColor='#ffffff' />
      <Text style={styles.signinTxt}>Sign In</Text>
    </Container>
  )
}

export default Login
