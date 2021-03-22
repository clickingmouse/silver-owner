import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph,IconButton, Colors} from 'react-native-paper';
import {

  StyleSheet,
  Text,
 
  View,
  
} from 'react-native';



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const ListItem = () => (
  <Card>
    <View style={{flexDirection: "row" , alignContent:"space-between"}}>
    <Card.Title title="Coming Soon!" subtitle="142-144B Pau Chung Street, To Kwa Wan, Kowloon City"  style={{flex:1}}/>



    <Card.Content style={{flex:1,}}>
      <View style = {{ alignItems:'flex-end'}}>
      {/*<Title >Card title</Title>*/}
      <Text>BankOwned -  Vacant</Text>
      <Text style={styles.cashOnly}> CASH ONLY</Text>
      <Paragraph >580 SQFT 2B 1Ba</Paragraph>
      </View>
    </Card.Content>

    </View>
    <Card.Cover   source={require('./images/test.jpeg')} />

    {/*<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />*/}
    <Card.Actions>

    <IconButton
    icon="heart-outline"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
      <Button>Save</Button>
      <Text>Count Down</Text>
      <Button>Register</Button>
    </Card.Actions>
  </Card>
);


const styles = StyleSheet.create({
  cashOnly:{backgroundColor:'orange',},
})

export default ListItem;