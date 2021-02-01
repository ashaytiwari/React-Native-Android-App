import React, {useState} from 'react';
import {
  StatusBar
} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
import styles from './styles';
import HeaderComponent from '../Header/header';
import axios from 'axios';

const Search = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  /**
   * function to fetch the weather api 
   */
  const fetchCities = () => {
    console.log(city);
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    // .then((response) => response.json())
    .then((res) => {
      console.log(res, 'res');
    })
    .catch((err) => {
      console.log(err, 'error');
    });
  }
  

  return (
    <Container>
      <HeaderComponent />
      <Content style={styles.searchPage}>
        <Form>
          <Item floatingLabel>
            <Label style={styles.label}>City Name</Label>
            <Input
              style={styles.input}
              value={city}
              onChange={e => setCity(e.nativeEvent.text)}
            />
          </Item>
          <Button style={styles.submitBtn}  onPress={() => fetchCities()} full>
            <Text>Click Me</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Search;
