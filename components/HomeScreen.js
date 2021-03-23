import * as React from 'react';
import { View, Text, SafeAreaView, Button} from 'react-native';
import { Container, Header, Content, Footer, Left, Body, Right,  Icon, Title } from 'native-base';

import Top from './Top';
import Filter from './Filter';
import Bottom from './Bottom';
import ListItems from './ListItem';



const HomeScreen = ({ navigation }) => {
    return (
      
      <Container>
        <Header>
          <Text>Header</Text>
      <Button
        title="next screen"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
      </Header>

      <Filter/>
        <Content>
      

        
        <View>
        <ListItems/>
        <ListItems/>
        
        <ListItems/>
        <ListItems/>
        <ListItems/>
        </View>


     
      </Content>
      <Footer>
     <Bottom/>

                </Footer>





      </Container>
      
    );
  };


  export default HomeScreen