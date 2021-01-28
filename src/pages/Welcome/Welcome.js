import React from 'react';
import styles from './styles';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Icon, Button, Text, Container, Content} from 'native-base';

const Welcome = ({navigation}) => {
  return (
    <Container style={styles.mainView}>
      <StatusBar barStyle="light-content" backgroundColor="#2e3192" />
      <Icon type="FontAwesome" name="cubes" style={styles.mainIcon} />
      <Button
        rounded
        style={styles.mainBtn}
        onPress={() => {
          console.log('Enter pressed');
          navigation.navigate('Home');
        }}>
        <Text style={styles.btnText}>Enter</Text>
      </Button>
    </Container>
  );
};

export default Welcome;
