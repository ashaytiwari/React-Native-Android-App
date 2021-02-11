import React from 'react';
import { StatusBar, View } from 'react-native';
import { 
  Container,
  Content,
  Text,
  Button, 
  Icon,
  Header,
  Right,
  Left,
  Body,
  Thumbnail,
  Card,
  CardItem
} from 'native-base';
import styles from './styles';
import {
  Col, 
  Row, 
  Grid
} from 'react-native-easy-grid';

const UserInfo = ({ navigation, route }) =>  {

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#2e3192" />
      <Header style={styles.header}>
        <Body style={styles.headerBody}>
            <Thumbnail large source={require('../../../images/logo.png')} style={styles.thumbnail} />
            <Text style={styles.userName}>{route.params.userInfo.name}</Text>
        </Body> 
      </Header>
      <Content style={styles.infoContent}>
        <Card style={styles.card}>
          <CardItem style={styles.cardHeader} header>
            <Text style={styles.headerTxt}>{route.params.userInfo.name} ({route.params.userInfo.username}) </Text>
          </CardItem>
          <CardItem style={styles.cardBody}>
            <Body>
              <Content contentContainerStyle={styles.cardBodyAddress}>
                <Icon type="Entypo" name="address" style={styles.addressIcon} />
                <Text style={styles.addressTxt}>Address</Text>
              </Content>
              <Grid>
                <Col size={1}>
                  <Text style={styles.label}>street</Text>
                </Col>
                <Col size={3}>
                  <Text style={styles.value}>{route.params.userInfo.address.street}</Text>
                </Col>
              </Grid>
              <Grid>
                <Col size={1}>
                  <Text style={styles.label}>suite</Text>
                </Col>
                <Col size={3}>
                  <Text style={styles.value}>{route.params.userInfo.address.suite}</Text>
                </Col>
              </Grid>
              <Grid>
                <Col size={1}>
                  <Text style={styles.label}>city</Text>
                </Col>
                <Col size={3}>
                  <Text style={styles.value}>{route.params.userInfo.address.city}</Text>
                </Col>
              </Grid>
              <Grid>
                <Col size={1}>
                  <Text style={styles.label}>zipcode</Text>
                </Col>
                <Col size={3}>
                  <Text style={styles.value}>{route.params.userInfo.address.zipcode}</Text>
                </Col>
              </Grid>
              <Grid>
                <Col size={1}>
                  <Text style={styles.label}>geo</Text>
                </Col>
                <Col size={3}>
                  <Text style={styles.value}>Lat: {route.params.userInfo.address.geo.lat}   Lng:  {route.params.userInfo.address.geo.lng} </Text>
                </Col>
              </Grid>
              <View style={styles.line} />
              <Content contentContainerStyle={styles.cardBodyAddress}>
                <Icon type="Entypo" name="network" style={styles.addressIcon} />
                <Text style={styles.addressTxt}>Company</Text>
              </Content>
              <Grid>
                <Col size={1}>
                  <Text style={styles.label}>name</Text>
                </Col>
                <Col size={3}>
                  <Text style={styles.value}>{route.params.userInfo.company.name}</Text>
                </Col>
              </Grid>
              <Grid>
                <Col size={1}>
                  <Text style={styles.label}>Catch phrase</Text>
                </Col>
                <Col size={3}>
                  <Text style={styles.value}>{route.params.userInfo.company.catchPhrase}</Text>
                </Col>
              </Grid>
              <Grid>
                <Col size={1}>
                  <Text style={styles.label}>bs</Text>
                </Col>
                <Col size={3}>
                  <Text style={styles.value}>{route.params.userInfo.company.bs}</Text>
                </Col>
              </Grid>
              <View style={styles.line} />
            </Body>
          </CardItem>
          <CardItem footer>
          <Icon type="Entypo" name="phone" style={styles.phoneIcon} />
          <Text style={styles.headerTxt}>{route.params.userInfo.phone}</Text>
          </CardItem>
        </Card>
      </Content>
      {/* <Button transparent onPress={() => navigation.navigate('Dashboard')}>
        <Icon name="chevron-back" style={styles.backIcon} type="Ionicons" />
      </Button>
      <Content style={styles.infoContent}>
        <Grid>
          <Col size={1}>
            
          </Col>
          <Col size={3}></Col>
        </Grid>
      </Content> */}
    </Container>
  )
}

export default UserInfo
