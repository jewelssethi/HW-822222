import React , {Component} from 'react';
import
 {Text,
 View,
  StyleSheet,
  Image,
  FlatList}
   from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class PostCard extends Component{
constructor(props) {
    super(props);
     this.state = {};
}

 componentDidMount() { }

  render(){
    return(
      <View style={styles.container}>
          <View style={styles.cardContainer}>
             <View style={styles.authorContainer}>
                  <View style={styles.authorImageContainer}>
                      <Image 
                      source={require('../assets/post.jpeg')}
                      style={styles.storyImage}
                      >
                      </Image>
                  </View>    
          
              <View style={styles.titleContainer}>
                <Text style={styles.storyTitleText}>
                {this.props.post.author}
                </Text>
                </View>
                </View>
                    <Image
                    source={require('../assets/post.jpeg')}
                    style={styles.profileImage}
                    />
                <View style={styles.captionContainer}>>
                <Text style={styles.storyTitleText}>{this.props.post.title}</Text>
              </View>
           
          <Image source={require("../assets/post.jpeg")}  style={styles.postImage} 
          />   
            <View style={styles.actionContainer}>
               <Text style={styles.captionText}> {this.props.post.caption}</Text>
            </View>
               <View style={styles.actionContainer}> 
                   <View style={styles.likeButton}>
                       <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
                       <Text style={styles.likeText}>12K</Text>
                   </View>
               </View>
            </View>
      </View>
      
      
      
    )
  }
}


const styles=StyleSheet.create({

container:{
    flex:1,
    backgroundColor:"black"

  },
  captionText: {
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
    },
   profileImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: RFValue(100)
    },
    captionContainer: {},

  authorContainer: {
        flex: 0.1,
        flexDirection: "row"
    },
    authorImageContainer: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
     actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  
  postImage: {
        marginTop: RFValue(20),
        resizeMode: "contain",
        width: "100%",
        alignSelf: "center",
        height: RFValue(275)
    },
     
     
     titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
     cardContainer:{
       flex:0.85
     },
     likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
 


  
})