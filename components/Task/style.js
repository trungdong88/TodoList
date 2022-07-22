import { StyleSheet } from "react-native";
import color from './../../contains/color'
const styles = StyleSheet.create({
    items :
    {
      marginTop : 30,
    },
    item : 
    {
      flexDirection : 'row',
      backgroundColor : '#7fb5b3',
      marginBottom : 15,
      paddingVertical : 10,
      paddingHorizontal : 20,
      borderRadius : 10,
      alignItems : 'center',
      justifyContent : 'space-between',
      
    },
    square : 
    {
      width : 31,
      height : 31,
      borderRadius : 13,
      
      alignItems : 'center',
      justifyContent : 'center'
    },
    event :
    {
      backgroundColor : color.green, 
    },
    odd : 
    {
      backgroundColor : color.blue,
    },
    number : 
    {
      fontWeight : 16,
      fontWeight : '700',
      color : color.white
    }, 
    content : 
    {
      width : '75%',
      fontSize : 16,
    }
})

export default styles;