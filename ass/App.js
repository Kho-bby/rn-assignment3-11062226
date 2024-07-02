import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../ass/components/header';
import Search from './components/search';
import Category from './components/category';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <Category />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingHorizontal: 20,
    paddingVertical: 100,
    
    
  
  },
});
