import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeView: {
    backgroundColor: '#ffffff',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  helloText: {
    fontSize: 40,
    color: '#2e3192',
    margin: 40,
    marginTop: 0
  },
  loginBtn: {
    backgroundColor: '#2e3192',
    marginRight: 55,
    marginLeft: 55,
    marginBottom: 20,
    height: 50
  },
  loginTxt: {
    fontSize: 20,
    color: '#ffffff',
  },
  signUpBtn: {
    backgroundColor: '#ffffff',
    marginRight: 55,
    marginLeft: 55,
    marginBottom: 20,
    height: 50,
    borderColor: '#2e3192',
    borderWidth: 2
  },
  signUpTxt: {
    fontSize: 20,
    color: '#2e3192'
  }
});

export default styles
