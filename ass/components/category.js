import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, ScrollView, Text, Image, FlatList} from 'react-native';

const Category = () => {
  const[task, setTask] = useState([
    {name: 'Algorithm Class', key:'1'},
    {name: 'Calculus Class', key:'2'},
    {name: 'Wash Dirty cloths', key:'3'},
    {name: 'Calisthetics', key:'4'},
    {name: 'Complete Assignment', key:'5'},
    {name: 'Play a Game', key:'6'},
    {name: 'Watch a movie', key:'7'},
    {name: 'Prepare for a presentation', key:'8'},
    {name: 'Push Ups', key:'9'},
    {name: 'Cook a meal', key:'10'},
    {name: 'Have a group studies', key:'11'},
    {name: 'Prep forData Structures quiz', key:'12'},
    {name: 'Finish up on Expo project', key:'13'},
    {name: 'Have a cyber security class', key:'14'},
    {name: 'Choose clothes and study material for class', key:'15'},
  ]);

  return (
    

    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Header2}>Categories</Text>
        <View style={styles.Box}>
          <View>
            <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
            <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Exercise</Text>
            <Text style={{marginLeft: 12}}>19 Tasks</Text>
            <Image style={{ marginLeft: 25}} source = {require('../assets/youngwoman.png')}/>
          </View>
        
          <View style={{marginLeft: 10}}>
            <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
            <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Study</Text>
            <Text style={{marginLeft: 12}}>4 Tasks</Text>
            <Image style={{ marginLeft: 25}} source={require('../assets/atDesk.png')}/>
          </View>
        </View>

        < View style={styles.Box}>  
          <View>
            <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
            <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Code</Text>
            <Text style={{marginLeft: 12}}>3 Tasks</Text>
            <Image style={{ marginLeft: 25, height: 130, width: 130}} source={require('../assets/code.png')}/>
          </View>

          <View style={{marginLeft: 10}}>
            <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
            <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Cook</Text>
            <Text style={{marginLeft: 12}}>1 Task</Text>
            <Image style={{ marginLeft: 25, height: 130, width: 130}} source={require('../assets/cook.png')}/>
          </View>
        </View>

        <View style={styles.Box}>  
          <View>
            <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
            <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Research</Text>
            <Text style={{marginLeft: 12}}>1 Task</Text>
            <Image style={{ marginLeft: 25, height: 130, width: 130}} source={require('../assets/research.png')}/>
          </View>

          <View style={{marginLeft: 10}}>
            <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
            <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Chores</Text>
            <Text style={{marginLeft: 12}}>2 Tasks</Text>
            <Image style={{ marginLeft: 25,height: 130, width: 130}} source={require('../assets/chor.png')}/>
          </View>
        </View>

        <View style={styles.Box}>  
          <View>
            <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
            <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Hobby</Text>
            <Text style={{marginLeft: 12}}>1 Task</Text>
            <Image style={{ marginLeft: 25, height: 130, width: 130}} source={require('../assets/hobby.png')}/>
          </View>

          <View style={{marginLeft: 10}}>
            <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
            <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Entertainment</Text>
            <Text style={{marginLeft: 12}}>1 Task</Text>
            <Image style={{ marginLeft: 25, height: 130, width: 130}} source={require('../assets/enter.png')}/>
          </View>
        </View>

        <Text style={styles.Header2}>Ongoing Task</Text>
        
        <View>
          <FlatList
            data={task}
            renderItem={({item}) => (
          <View style={styles.taskList}>
            <Button title={item.name} color='black' onPress={() => {}}/>
          </View>
              )}
              />
        </View>
      </ScrollView>
     
    </View>
  );
};



const styles = StyleSheet.create({
  Header2: {
    marginTop: 45,
    marginBottom: 10,
    fontFamily: 'Lato',
    fontSize: 23,
    lineHeight: 30,
    fontWeight: '700',
  },
  firstRow:{
    flexDirection: 'row'
  },
  Box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
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
  Box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  categoryBox: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    width: 175,
    height: 192,
  },
  taskList: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 10,
    width: 350,
    height: 110,
    wrapText: true,
  },
  container:{

  }
});

export default Category;
