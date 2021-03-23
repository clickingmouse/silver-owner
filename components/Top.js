import { Appbar } from 'react-native-paper';
import React from 'react';
import type {Node} from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import {StyleSheet} from 'react-native'
const Top = ()=>{
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
    return(
        <Appbar.Header>
        <Appbar.Action icon="menu" onPress={_handleMore} />
        {/*<Appbar.BackAction onPress={_goBack} />*/}
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        
      </Appbar.Header>
    )
}


const styles = StyleSheet.create({
  
})
export default Top;
