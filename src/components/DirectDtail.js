import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const DirectDetail = ({ album, navigation }) => {
   return (
      <View style={styles.background}>
         <View style={styles.box}>
            <Image 
               style={styles.thumbnailImg}
               source={{uri: album.thumbnail_image}}
            />
            <View>
               <Text style={styles.name}>{album.title}</Text>
               <Text style={styles.massage}>something</Text>
            </View>
            
         </View>
        
      </View>
  )};

const styles = StyleSheet.create({
   thumbnailImg:{
      width:55,
      height:55,
      borderRadius:30
   },
   box:{
      marginLeft:24,
      marginTop:10,
      marginBottom:10,
      flexDirection:'row',
      alignItems:'center'
   },
   name:{
      marginLeft:24,
      fontSize:14
   },
   massage:{
      marginLeft:24,
      opacity:0.7,
      fontSize:12
   }

});

export default DirectDetail;