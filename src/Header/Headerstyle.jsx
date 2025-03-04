import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  header:{
    width:"auto",
    height:200,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'flex-end',
    flexDirection:'column-reverse',
  },
  bgimage:{
    height:200,
    width:'auto',
  },
  h2:{
    color:"rgb(214, 222, 235)",
    fontSize:30,
    backgroundColor:'rgba(117, 133, 131, 0.62)',  //'rgba(92, 92, 92, 0.41)',
    width:"100%",
    height:47,
    paddingHorizontal:20,
    paddingTop:10,
    fontWeight:'bold',
    fontFamily:'Google Sans',
    zIndex:2,


  },
  h4:{
    color:"rgb(214, 222, 235)",
    fontSize:20,
    backgroundColor:'rgba(117, 133, 131, 0.62)',
    width:"100%",
    height:47,
    paddingHorizontal:20,
    fontWeight:'300',
    fontFamily:'Google Sans',
    zIndex:2,
  },
  mode:{
    justifyContent:'flex-end',
    // backgroundColor:'plum',
    alignItems:'center',
    flexDirection:'row',
    paddingVertical:10,
    marginHorizontal:20,
    gap:4
},
modetext:{
    fontFamily:'Google Sans',
    color:"black",
    fontWeight:'600'
    
},
body:{
    height:250,
    width:'90%',
    backgroundColor:'rgb(255, 255, 255)',
    marginHorizontal:'auto',
    borderRadius:15,
    marginTop:10,
    shadowColor:'rgb(0, 0, 0)', //rgb(10, 110, 210)
    shadowOffset:[{height:50,width:50}],
    shadowOpacity:10,
    shadowRadius:60,
    elevation:20
},
destitle:{
    fontSize:25,
    height:47,
    paddingHorizontal:20,
    paddingTop:10,
    fontWeight:'bold', 
    fontFamily:'Google Sans',
    color:'rgb(0,0,0)',
    textTransform:'capitalize',
},
images:{
    height:120,
    width:220,
    marginHorizontal:10,
    borderTopLeftRadius:15,
    borderTopRightRadius:15, 
    marginTop:10
},
placename:{
    fontSize:20,
    color:'rgb(0,0,0)',
    textAlign:'left',
    marginLeft:15,
    fontWeight:'medium',
    fontFamily:'serif',
    
},
scrollbody:{
    marginHorizontal:'auto',
    borderRadius:15,
    marginLeft:12,
    marginTop:10
},
traveldetailsbody:{
  height:250,
  width:'90%',
  backgroundColor:'rgb(255, 255, 255)',
  marginHorizontal:'auto',
  borderRadius:15,
  marginTop:25,
  shadowColor:'rgb(0, 0, 0)', //rgb(210, 10, 10)
  shadowOffset:[{height:50,width:50}],
  shadowOpacity:10,
  shadowRadius:60,
  elevation:20
},
inputholder:{
  backgroundColor:'rgb(243, 242, 242)',
  width:'90%',
  height:70,
  marginHorizontal:'auto',
  borderRadius:10,
  paddingHorizontal:15,
  borderWidth:1.4,
  borderColor:'rgb(206, 206, 206)',
  marginTop:20
},
input1:{
  fontSize:20,
  color:'rgb(0, 0, 0)'
  
},
label:{
  color:'rgb(186, 185, 185)'
},
btntext:{
  color:'rgb(0,0,0)',
  marginVertical:'10',
  textAlign:'center',
  paddingVertical:6,
  paddingHorizontal:7
},
tbutton:{
  margin:5,
  alignSelf:'auto',
  borderRadius:30,
},
tview:{
  paddingHorizontal:15,
  // backgroundColor:'rgb(234, 234, 234)',
  paddingVertical:3,
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  // borderWidth:2
  
},
btnbody:{
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap',
  margin:12
},
pressabletext:{
  color:'black',
  paddingVertical:10,
  paddingHorizontal:10,
  width:'95%',
  marginHorizontal:'auto',
  borderRadius:10,
  fontSize:15,
},
pressableheader:{
  fontSize:20,
  color:'rgb(255, 255, 255)',
  backgroundColor:'rgb(80, 225, 211)',
  paddingVertical:10,
  paddingHorizontal:10,
  width:'95%',
  marginHorizontal:'auto',
  borderRadius:10
},
btn:{
  width:'90%',
  backgroundColor:'rgb(99, 1, 239)',
  marginHorizontal:'auto',
  borderRadius:12,
  marginVertical:20,
  paddingVertical:6,
},
buttontext:{
  textAlign:'center',
  paddingVertical:6,
  fontSize:20,
  color:'white',
},
footer:{
  color:'rgba(0, 0, 0, 0.42)',
  marginHorizontal:'auto',
  marginVertical:10,
  marginBottom:30
  // width:'100%',
  // paddingHorizontal:'auto'
},
loader:{
  color:'white'
},
modaloutterbody:{
  flex:1,
  backgroundColor:'rgba(0, 0, 0, 0.41)',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'row'
},
modelbody:{
  width:'90%',
  height:300,
  backgroundColor:'rgb(255,255,255)',
  borderRadius:20
},
tickimage:{
  width:'100',
  height:'100',
  margin:'auto',
  // marginHorizontal:'auto'
},
h2Text:{
  fontSize:30,
  fontWeight:'semibold',
  color:'rgb(0,0,0)',
  textAlign:'center'
},
bodytext:{
  color:'grey',
  textAlign:'center',
  fontSize:20,  
},
button:{
  alignSelf:'center',
  borderRadius:50,
  
},
buttonholder:{
  width:'30%',
  marginHorizontal:'auto',
  marginVertical:10,
  // height:60
},
holder:{
  
}
})

