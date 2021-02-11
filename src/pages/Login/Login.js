import React, {useState} from 'react';
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
  Toast,
  Root,
} from 'native-base';

const Login = ({navigation, route}) => {
  const [emailMobile, setEmailMobile] = useState('');
  const [pass, setPass] = useState('');
  const userData = [
    {
      firstName: 'Abc',
      lastName: 'Def',
      email: 'abc@gmail.com',
      phoneNo: '1122334455',
      pass: '12345',
    },
    {
      firstName: 'Test1',
      lastName: 'Test1',
      email: 'Test1@gmail.com',
      phoneNo: '1122334455',
      pass: '12345',
    },
  ];

  /**
   * function to push new user data into existing data coming from sign up page
   */
  if (typeof route.params !== 'undefined') {
    const newUserRegistration = () => {
      userData.push({
        firstName: route.params.first,
        lastName: route.params.last,
        email: route.params.email,
        phoneNo: route.params.phone,
        pass: route.params.password,
      });
      console.log(userData);
    };
    newUserRegistration();
  }

  /**
   * function for login implementation
   */
  const login = () => {
    let count = 0;
    let userIndex = 0;
    for (let user = 0; user < userData.length; user++) {
      if (
        (emailMobile === userData[user].email ||
          emailMobile === userData[user].phoneNo) &&
        pass === userData[user].pass
      ) {
        count = 0;
        userIndex = user;
        console.log('user index', userIndex);
        break;
      } else {
        count++;
      }
    }
    if (!count) {
      resetForm();
      navigation.navigate('Dashboard', {
        userData: userData[userIndex]
      });
    } else {
      return Toast.show({
        text: 'Wrong Email or Password',
        buttonText: 'Ok',
        position: 'bottom',
        type: 'danger',
        duration: 4000,
      });
    }
  };

  /**
   * function to resset the form
   */
  const resetForm = () => {
    setEmailMobile("");
    setPass("");
  } 

  /**
   * function to disabled the login button
   */
  const disabledBtn = () => {
    if(!emailMobile || !pass){
      console.log('empty values');
      return true;
    } 
    else{
      console.log('have values');
      return false;
    }
  }

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
      <Button transparent onPress={() => navigation.navigate('Home')}>
        <Icon name="chevron-back" style={styles.backIcon} type="Ionicons" />
      </Button>

      <Content style={styles.loginView}>
        <Text style={styles.signinTxt}>Sign In</Text>
        <Content style={styles.inputBlock}>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              placeholder="Email or Phone Number"
              value={emailMobile}
              onChange={(e) => setEmailMobile(e.nativeEvent.text)}
            />
          </Item>
          <Item style={styles.item}>
            <Input
              secureTextEntry={true}
              style={styles.input}
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.nativeEvent.text)}
            />
          </Item>
        </Content>

        <Content contentContainerStyle={styles.btnBlock}>
          <Button style={styles.loginBtn} rounded block onPress={() => login()} disabled={disabledBtn()}>
            <Text style={styles.loginTxt}>Log In</Text>
          </Button>
          <Text style={styles.orText}>OR</Text>
          <Button style={styles.loginFb} rounded block>
            <Text style={styles.loginFbTxt}>Login with Facebook</Text>
          </Button>
        </Content>
      </Content>
    </Container>
  );
};

export default Login;
