import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, } from 'react-native-paper';
import {

  StyleSheet,
  Text,
 
  View,
  
} from 'react-native';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const ListItem = () => (
  <Card>
    <View style={{flexDirection: "row" , alignContent:"space-between"}}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} style={{flex:1}}/>



    <Card.Content style={{flex:1,}}>
      <View style = {{ alignItems:'flex-end'}}>
      <Title >Card title</Title>
      <Paragraph >Card content</Paragraph>
      </View>
    </Card.Content>

    </View>

    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Save</Button>
      <Text>Count Down</Text>
      <Button>Register</Button>
    </Card.Actions>
  </Card>
);

export default ListItem;