/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  ActivityIndicator,
  Button,
  FlatList,
  Modal
} from 'react-native';
import {ReactImg} from './images';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DATA = [
  {
    id:'li1',
    title: 'Madhav'
  },
  {
    id:'li2',
    title: 'Madanmohan'
  },
  {
    id:'li3',
    title: 'NeelMadhav',
  },
  {
    id:'li4',
    title: 'Govinda'
  }
];

const Item = ({ title }) => (
  <View style={styles.listItem}>
    <Text style={styles.listText}>{title}</Text>
  </View>
);

const App = () => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const RenderItems = ({ item }) => {
    <Item title={item.title} />
  }

  const loadPress = () => {
    console.log('Btn Pressed', isLoading);
    setIsLoading(!isLoading);
    console.log('Btn Pressed', isLoading);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="teal" />
      <SafeAreaView style={styles.parentView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.childView}>
            <Text style={styles.introText}>
              Hare
              <Text style={styles.redText}>Krishna</Text>
            </Text>
          </View>
          <Image source={ReactImg} style={styles.image1} />
          {/* <ImageBackground source={ReactImg} style={styles.image1}>
          <Text style={styles.insideText}>Shri Ram</Text>
        </ImageBackground> */}
          <TextInput
            onChange={(text) => setName(text)}
            value={name}
            style={styles.nameInput}
          />
          <Button 
          title="Loading"
          onPress={() => loadPress()} 
          color="teal"
          />
          {
            isLoading ? <ActivityIndicator color="teal" size="large" /> : null
          }
          <FlatList 
          data={DATA}
          renderItem={RenderItems}
          keyExtractor={item => item.id} 
          />
          <View style={styles.btnView}>
            <Button 
            title="Modal"
            color="teal"
            onPress={() => setIsModalOpen(!isModalOpen) } 
            />
            <Modal animationType="slide"
            transparent={true}
            visible={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            >
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hare Krishna</Text>
                { 
                DATA.map((item) => (
                  <View style={styles.listItem}>
                    <Text style={styles.listText}>{item.title}</Text>
                  </View>
                ))}
              </View>
              <Button 
              title="close"
              color="teal"
              onPress={() => setIsModalOpen(false)} />
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  parentView: {
    height: '100%',
    backgroundColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  childView: {
    padding: 50,
    backgroundColor: 'teal',
    color: '#ffffff',
    borderRadius: 5,
    // width: '55%',
    marginTop: 20
  },
  introText: {
    fontSize: 20,
    color: '#ffffff',
  },
  redText: {
    color: 'yellow',
  },
  image1: {
    width: 300,
    height: 400,
    marginTop: 20,
  },
  nameInput: {
    backgroundColor: 'teal',
    marginTop: 20,
    width: 300,
    marginBottom: 20
    // height: 60,
    // padding: 6
  },
  listItem: {
    backgroundColor: "teal",
    padding: 20,
    marginTop: 20
  },
  listText: {
    fontSize: 20
  },
  modalView: {
    backgroundColor: 'orange'
  }

});

export default App;
