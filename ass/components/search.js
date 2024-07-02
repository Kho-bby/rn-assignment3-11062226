import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.searchBox}>
      <View>
        <Image style={styles.search} source={require('../assets/search.png')}/>
        <TextInput placeholder='Search..' style={{fontWeight: 'bold', marginLeft: 20, margin: -12, paddingLeft: 2}}/>
      </View>
    
      <View>
        <TextInput editable={false} selectTextOnFocus={false} style={styles.filter}><Ionicons name='options-sharp' color='white' size={34}/></TextInput>
      </View>
    </View>
    
  );
};


const styles = StyleSheet.create({
  searchContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    width: 260,
    height: 40,
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    width: 260,
    height: 40,
  },
  search: {
    height: 16,
    width: 16,
    margin: -1,
   
  },
  filter: {
    backgroundColor: '#F0522F',
    padding: 5,
    borderRadius: 13,
    width: 45,
    height: 42,
    marginTop: -10,
    marginLeft: 215,
  },

  





    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    }

  
  
});

export default Search;
