import React from 'react';
import {StatusBar} from 'react-native';
import styles from './styles';
import {
  Text,
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Item,
  Input,
  Button,
  Icon,
} from 'native-base';

const Login = ({ navigation }) => {
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ffffff" />
      {/* <Header style={styles.loginHeader}>
        <Left>
          <Button transparent>
            <Icon name="chevron-back" style={styles.backIcon} type="Ionicons"/>
          </Button>
        </Left>
        <Body />
        <Right />
      </Header> */}
      <Button transparent 
      onPress={() => navigation.navigate('Home')}>
        <Icon name="chevron-back" style={styles.backIcon} type="Ionicons" />
      </Button>

      <Content style={styles.loginView}>
        <Text style={styles.signinTxt}>Sign In</Text>
        <Content style={styles.inputBlock}>
          <Item style={styles.item}>
            <Input style={styles.input} placeholder="Email or Phone Number" />
          </Item>
          <Item style={styles.item}>
            <Input secureTextEntry={true} style={styles.input} placeholder="Password"/>
          </Item>
        </Content>

        <Content contentContainerStyle={styles.btnBlock}>
          <Button 
          style={styles.loginBtn}
          rounded
          block
          >
            <Text style={styles.loginTxt}>Log In</Text>
          </Button>
          <Text style={styles.orText}>OR</Text>
          <Button 
          style={styles.loginFb}
          rounded
          block
          >
            <Text style={styles.loginFbTxt}>Login with Facebook</Text>
          </Button>
        </Content>
      </Content>
    </Container>
  );
};

export default Login;
