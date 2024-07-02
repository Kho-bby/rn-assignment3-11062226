import { View, Text, StyleSheet,Image} from 'react-native';

const Header =( ) => {
    return (
    <View style={styles.headercontainer}>
      <View >
        <Text style={{fontFamily: 'Lato', fontSize: 30, fontWeight: 'bold'}}>Hello , Devs </Text>
        <Text style={styles.taskinfo}>12 Tasks today</Text>
      </View>
      <Image   source = {require('../assets/person.png')}/>
    </View>
  );
}



const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#000000',
    fontFamily: 'Lato',
    marginBottom: 30,
    gap: 200 ,
  },
  

  Image: {
    width: 50 ,
    height: 52 ,
   }
    

});
export default Header;