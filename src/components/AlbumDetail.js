import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>
        {/* 頭像 */}
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailImg}
            source={{
              uri: album.thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.name}>{album.title}</Text>
          </View>
        </View>
        {/* 大圖 */}
        <View style={styles.cardSectionStyle}>
          <Image style={styles.imageStyle} source={{uri: album.image}}/>
        </View>  
        {/* 貼文  */}
        <View style={styles.iconList}>
          <Image style={styles.heartIcon} source={require('./img/round_favorite_border_black_18dp.png')}/>
          <Image style={styles.heartIcon} source={require('./img/round_favorite_border_black_18dp.png')}/>
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailImg: {
    height: 50,
    width: 50,
    margin: 5,
    borderRadius:30

  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
  },
  name:{
    fontFamily:'Roboto',
    fontSize:18,
    fontWeight:'bold'

  },
  imageStyle: {
    height:370,
    width: null,
    marginLeft:5,
    marginRight:5,
    borderRadius:3
  },
  iconList:{
    marginLeft:0,
    backgroundColor:'#fff',
    flexDirection:'row',
    paddingLeft:10,
    paddingTop:10
  },
  heartIcon:{
    height: 40,
    width: 40,
    marginRight:10
  }
});

export default AlbumDetail;
