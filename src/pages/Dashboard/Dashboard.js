import React, {useState} from 'react';
import {StatusBar, Modal, View} from 'react-native';
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
  Icon,
  Spinner,
  Footer,
  FooterTab
} from 'native-base';
import styles from './styles';
import axios from 'axios';

const Dashboard = ({navigation, route}) => {
  const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  /**
   * function to get the posts
   */
  const getPosts = () => {
    // setIsLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        // setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setIsLoading(false);
      });
  };
  getPosts();

  const navigateUserInfo = (post) => {
    navigation.navigate('UserInfo', {
      userInfo: post,
    });
  };

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
        {/* {isLoading ? (
          <Spinner color="blue" />
        ) : ( */}
          <List style={styles.list}>
            {posts.map((post) => (
              <ListItem
                key={post.id}
                avatar
                style={styles.listItem}
                onPress={() => navigateUserInfo(post)}>
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
        {/* )} */}
      </Content>

      <Footer>
        <FooterTab style={styles.footer}>
          <Button vertical>
            <Icon name="tasks" type="FontAwesome5" style={styles.footerIcon} />
            <Text style={styles.footerText}>Todo's</Text>
          </Button>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Dashboard;
