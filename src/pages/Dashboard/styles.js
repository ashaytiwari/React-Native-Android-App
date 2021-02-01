import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  infoCard: {
    backgroundColor: '#2e3192',
    padding: 20
  },
  header: {
    backgroundColor: '#2e3192',
    padding: 20,
    height: 70
  },
  avatar: {
    width: 50,
    height: 50,
  },
  avatarText: {
    fontSize: 20
  },
  userName: {
    fontSize: 25,
    color: "#ffffff"
  },
  avatarList: {
    width: 45,
    height: 45,
    padding: 6,
    borderRadius: 50,
    backgroundColor: '#2e3192'
  },
  listId: {
    fontSize: 20
  },
  listTitle: {
    fontSize: 20
  },
  listItem: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  listAvatarTxt: {
    fontSize: 20
  },
  backIcon: {
    fontSize: 30
  },
  headerBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerIcon: {
    color: '#ffffff',
    fontSize: 35,
    marginLeft: 10
  },
  headerText: {
    color: '#ffffff',
    fontSize: 35,
    marginLeft: 20
  },
  modalContent: {
    backgroundColor: '#ffffff'
  }
});

export default styles;