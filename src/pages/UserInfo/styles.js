import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  backIcon: {
    color: '#ffffff',
    fontSize: 25
  },
  header: {
    height: 150
  },
  headerBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    // marginLeft: 70,
  },
  userName: {
    color: '#ffffff',
    fontSize: 24,
    // marginLeft: 70,
  }, 
  headerTxt: {
    color: '#2e3192',
    fontSize: 19
  },
  card: {
    borderRadius: 20
  },
  cardBodyAddress: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20
  },
  addressIcon: {
    fontSize: 20,
    color: '#2e3192',
    marginRight: 20
  }, 
  addressTxt: {
    fontSize: 20,
  },
  label: {
    color: '#2e3192',
  }, 
  line: {
    borderBottomColor: '#2e3192',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 15,
    marginTop: 15
  }, 
  phoneIcon: {
    fontSize: 20,
    color: '#2e3192'
  }
});

export default styles