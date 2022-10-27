import  React, {Component} from 'react';
import { Text,
 View,
StyleSheet,
SafeAreaView,
Platform,
StatusBar,
Image,
ScrollView,
TextInput
 } from 'react-native';
 import { RFValue } from "react-native-responsive-fontsize";
 import DropDownPicker from "react-native-dropdown-picker";

 import AppLoading from "expo-app-loading";
 import * as Font from "expo-font";
 
 


export default class CreatePost extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,  
      previewImage: "image_1",
      dropdownHeight: 40,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
     this._loadFontsAsync();
  }

  render (){
    if(!this.state.fontsLoaded){
      return<AppLoading/>
    } else {
      let preview_images = {
        image_1: require('../assets/image_1.jpg'),
        image_2:require('../assets/image_2.jpg'),
        image_3:require('../assets/image_3.jpg'),
        image_4:require('../assets/image_4.jpg'),
        image_5:require('../assets/image_5.jpg')
      };
      console.log(this.state.previewImage);
    
    return(
      <View style={styles.container}>
         <SafeAreaView style={styles.droidSafeArea}/>
           <View style={styles.appTitle} >
               <View style={styles.appIcon}>
                  <Image
                  soruce={require('../assets/logo.png')}
                  style={styles.iconImage}
                  >
                  </Image>
               </View>
               <View style={styles.appTitleTextContainer}> 
                   <Text style={styles.appTitletext}>
                   New Post
                   </Text>
               </View>
           </View>
          <View style={styles.fieldsContainer}>
                 <Image
                 source={preview_images[this.state.previewImage]}
                 style={styles.previewImage}
                 >
                 </Image>
                   
                   <View style={{height:RFValue(this.state.dropdownHeight)}}>
                      <DropDownPicker
                      items = {[
                        {label: "Image 1", value:"image_1"},
                        {label: "Image 2", value:"image_2"},
                        {label: "Image 3", value:"image_3"},
                        {label: "Image 4", value:"image_4"},
                        {label: "Image 5", value:"image_5"},
                        {label: "Image 6", value:"image_6"},
                        {label: "Image 7", value:"image_7"},

                      ]}
                      defaultValue={this.state.previewImage}
                      open={this.state.dropdownHeight == 170 ? true : false}
                      onOpen={() => {
                      this.setState({ dropdownHeight: 170 });
                      }}
                      onClose={() => {
                      this.setState({ dropdownHeight: 40 });
                      }}

                      containerStyle={{
                        height: 40,
                        borderRadius:20,
                        marginBottom:10
                      }}
                     
                      style={{ backgroundColor:'transparent'}}
                      itemStyle={{justifycontent:"flex-start"}}

                      dropdownstyle={{ backgroundColor:'#2a2a2a'}}
                      labelStyle = {{
                        color:'white'
                      
                      }}
                      onchangeItem={item =>
                      this.setState({
                        previewImage:item.value
                      })
                      }
                      
                      />
                   </View>
                   <ScrollView>
                    <TextInput
                     style={[styles.inputFont,styles.inputFontExtra,styles.inputTextBig]}
                     onChangeText={(caption) => this.setState({caption})}
                     placeholder={'caption'}
                     placeholderTextColor={"white"}
                   />
                   </ScrollView>
                  

            
          </View>
          <View style={{flex:0.08}}/>
          
      </View>

      

    )
    }
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  fieldsContainer: {
    flex: 0.85,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },

     appTitle:{
       flex:0.07,
       flexDirection : "row"
     },
     appIcon:{
       flex:0.2,
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
     inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    marginTop: RFValue(10),
    fontFamily: "Bubblegum-Sans",
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
  },
    
     
     


})