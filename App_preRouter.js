/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  //Footer,
} from 'react-native';

import { Container, Header, Content, Footer, Left, Body, Right, Button, Icon, Title } from 'native-base';

import {
  Colors,
  DebugInstructions,
  //Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

import { Appbar } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import Top from './components/Top';
import Filter from './components/Filter';
import Bottom from './components/Bottom';
import ListItems from './components/ListItem';
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <PaperProvider>
   

   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Container>
    
        <Header style={{flexDirection:"column"}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Top/>
      
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
    
   
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  background: {
    flex:1,
  },

  scrollStyle: {
   
  },

});

export default App;
