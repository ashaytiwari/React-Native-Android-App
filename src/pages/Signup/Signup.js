import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {
  Text,
  Container,
  Button,
  Icon,
  Content,
  Item,
  Input,
  Toast,
} from 'native-base';
import styles from './styles';

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [pass, setPass] = useState('');

  /**
   * function to create the account
   */
  const createAccount = () => {
    Toast.show({
      text: 'Successfully Account Created',
      buttonText: 'Ok',
      position: 'bottom',
      type: 'success',
      duration: 4000,
    });
    navigation.navigate('Login', {
      first: firstName,
      last: lastName,
      email: email,
      phone: phoneNo,
      password: pass,
    });
  };

  return (
    <Container>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ffffff" />
      <Button transparent onPress={() => navigation.navigate('Home')}>
        <Icon name="chevron-back" style={styles.backIcon} type="Ionicons" />
      </Button>

      <Content style={styles.signupView}>
        <Text style={styles.signupTxt}>Sign Up</Text>
        <Content style={styles.inputBlock}>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.nativeEvent.text)}
            />
          </Item>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.nativeEvent.text)}
            />
          </Item>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChange={(e) => setEmail(e.nativeEvent.text)}
            />
          </Item>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="numeric"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.nativeEvent.text)}
            />
          </Item>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={pass}
              onChange={(e) => setPass(e.nativeEvent.text)}
            />
          </Item>
        </Content>

        <Content contentContainerStyle={styles.btnBlock}>
          <Button
            style={styles.createAcc}
            rounded
            block
            onPress={() => createAccount()}>
            <Text style={styles.createTxt}>Create Account</Text>
          </Button>
        </Content>
      </Content>
    </Container>
  );
};

export default Signup;
