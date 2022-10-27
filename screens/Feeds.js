import  React, {Component} from 'react';
import { Text, View, StyleSheet,SafeAreaView,Image } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

import PostCard from "./PostCard"
let posts =require("./temp_post.json")
import { FlatList } from "react-native-gesture-handler";

export default class Feed extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

componentDidMount() { }


 renderItem = ({ item: post }) => {
    return <PostCard post={post} />;
  };

keyExtractor = (item, index) => index.toString();



  render() {
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
               <View style={styles.appIcon}>
                  <Image 
                   source={require('../assets/logo.png')}
                   style={styles.iconImage}
                    >
                   </Image>
               </View>
                     <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitletext}>Spectagram</Text>
                      </View>
          </View>
          <View style={styles.cardContainer}>
        
          <FlatList
          keyExtractor={this.keyExtractor}
          data={posts}
          renderItem={this.renderItem}
          />
          </View>
          <View style={{ flex: 0.08 }}/>
      </View>
      
  

    )
    
  }
  
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"

  },
  

     appTitle:{
       flex:0.07,
       flexDirection : "row"
     },
     appIcon:{
       flex:0.4,
       justifycontent:'center',
       alignItems:'center'
       
     },
     iconImage:{
       height:'100%',
       width:'100%',
       resizeMode:'contain'
     },
     appTitleTextContainer:{
       flex:0.8,
       justifycontent:"center"
     },
     appTitletext:{
       color:"white",
       fontSize:28
     },
     cardContainer:{
       flex:0.85
     }


})