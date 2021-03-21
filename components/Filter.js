import { DataTable } from 'react-native-paper';
import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native'
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
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat (g)</DataTable.Title>
        </DataTable.Header>
      </DataTable>
    )
}


const styles = StyleSheet.create({
    container:{flex:1,},
})
export default Filter;
