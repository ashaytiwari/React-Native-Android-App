import React, {useState} from 'react';
import {
  StatusBar,
  Modal,
  View
} from 'react-native';
import {
  Text,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Badge,
  Left,
  Right,
  List,
  ListItem,
  Thumbnail,
  Button,
  Icon
} from 'native-base';
import styles from './styles';
import axios from 'axios';

const Dashboard = ({navigation, route}) => {
  const [posts, setPosts] = useState([]);

  /**
   * function to get the posts
   */
  const getPosts = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getPosts();

  const navigateUserInfo = (post) => {
    navigation.navigate('UserInfo', {
      userInfo: post
    })
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#2e3192" />
      <Header style={styles.header}>
        <Left>
        <Icon type="Ionicons" name="md-home" style={styles.headerIcon} />
        </Left>
        <Body style={styles.headerBody}>
          <Text style={styles.headerText}>Home</Text>
        </Body>
        <Right />
      </Header>

      <Content style={styles.listContent}>
        <List style={styles.list}>
          {posts.map((post) => (
            <ListItem key={post.id} avatar style={styles.listItem} onPress={() => navigateUserInfo(post)}>
              <Left>
                <Badge style={styles.avatarList}>
                  <Text style={styles.listAvatarTxt}>
                    {post.name.substr(0, 1)}
                  </Text>
                </Badge>
              </Left>
              <Body>
                <Text style={styles.listTitle}>{post.name}</Text>
                <Text style={styles.listEmail}>{post.email}</Text>
              </Body>
              <Right>
                <Text style={styles.listId}>{post.id}</Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Dashboard;
