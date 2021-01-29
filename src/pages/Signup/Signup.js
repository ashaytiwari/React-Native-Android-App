import React from 'react';
import { StatusBar } from 'react-native';
import {
  Text,
  Container,
  Button,
  Icon,
  Content,
  Item,
  Input
} from 'native-base';
import styles from './styles';

const Signup = ({navigation}) => {
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ffffff" />
      <Button 
      transparent
      onPress={() => navigation.navigate('Home')}
      >
        <Icon name="chevron-back" style={styles.backIcon} type="Ionicons" />
      </Button>
      
      <Content style={styles.signupView}>
        <Text style={styles.signupTxt}>Sign Up</Text>
        <Content style={styles.inputBlock}>
          <Item style={styles.item}>
            <Input style={styles.input} placeholder="First Name"  />
          </Item>
          <Item style={styles.item}>
            <Input style={styles.input} placeholder="Last Name" />
          </Item>
          <Item style={styles.item}>
            <Input style={styles.input} placeholder="Email" keyboardType="email-address" />
          </Item>
          <Item style={styles.item}>
            <Input style={styles.input} placeholder="Phone Number" keyboardType="numeric"/>
          </Item>
          <Item style={styles.item}>
            <Input style={styles.input} placeholder="Password" secureTextEntry={true} />
          </Item>
        </Content>

        <Content contentContainerStyle={styles.btnBlock}>
          <Button 
          style={styles.createAcc}
          rounded
          block
          >
            <Text style={styles.createTxt}>Create Account</Text>
          </Button>
        </Content>
      </Content>
    </Container>
  )
}

export default Signup
