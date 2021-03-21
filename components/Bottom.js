import { BottomNavigation, Text } from 'react-native-paper';
import * as React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Icon from 'react-native-vector-icons/FontAwesome5';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Bottom = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'music', title: 'Music', icon: 'account-circle' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      music: MusicRoute,
      albums: AlbumsRoute,
      recents: RecentsRoute,
    });
  
    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    );
  };


const styles = StyleSheet.create({
    container:{flex:1,},
})
export default Bottom;
