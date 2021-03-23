import { DataTable } from 'react-native-paper';
import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from 'react-native-vector-icons/MaterialIcons'
const Filter = ()=>{
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
    return(
        <DataTable>
        <DataTable.Header>
          <DataTable.Title
            sortDirection='descending'
          >
            Descending
          </DataTable.Title>
          <DataTable.Title numeric>18 Properties available</DataTable.Title>
        </DataTable.Header>
      </DataTable>
    )
}


const styles = StyleSheet.create({
    container:{flex:1,},
})
export default Filter;
