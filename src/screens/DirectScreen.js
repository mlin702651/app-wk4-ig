import React from "react";
import { StyleSheet,ScrollView,FlatList,View,Image,Text } from 'react-native';
import DirectDetail from "../components/DirectDtail";
import albumData from "../json/albums.json";

const DirectScreen = ({ navigation }) => {

  return (
    <View style={{flex: 1,backgroundColor:'#fff'}}>
      <View style={styles.searchbox}>
        <Text style={styles.search}>Search</Text>
      </View>
      <FlatList
        data={albumData.albumList}
        renderItem={({ item }) => 
        <DirectDetail 
          album={item}       
          navigation={navigation}
        />}
        keyExtractor={item => item.title}
      />
      <Text style={styles.new}>1</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  searchbox:{
    backgroundColor:'#fff',
    borderColor:'gray',
    borderWidth:0.75,
    borderRadius:5,
    marginLeft:24,
    marginRight:24,
    marginTop:20,
    marginBottom:10,
    paddingTop:10,
    paddingBottom:10,
    alignItems:'center'
  },
  search:{
    color:'darkgray',
    fontSize:16
  },
  new:{
    backgroundColor:'#2E8431',
    position:'absolute',
    top:98,
    borderRadius:30,
    color:'#fff',
    paddingBottom:1,
    paddingTop:1,
    paddingLeft:6,
    paddingRight:6,
    right:25,
  }

});
export default DirectScreen;
