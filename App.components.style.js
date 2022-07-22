import color from './contains/color'
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        
      },
      body :
      {
        flex : 1,
        paddingTop : 50,
        paddingHorizontal : 48,
      },
      header : 
      {
        fontSize : 24,
        color : color.primary,
        fontWeight : 'bold',
      },
      items :
      {
        marginTop : 30,
      },
      item : 
      {
        flexDirection : 'row',
        backgroundColor : '#5f6b9c',
        marginBottom : 15,
        paddingVertical : 10,
        paddingHorizontal : 20,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'space-between',
        
      },
      square : 
      {
        width : 48,
        height : 31,
        borderRadius : 10,
        backgroundColor : '#378a84',
        alignItems : 'center',
        justifyContent : 'center'
      },
      number : 
      {
        fontWeight : 16,
        fontWeight : '700',
        color : '#fff'
      }, 
      content : 
      {
        width : '75%',
        fontSize : 16,
      }
})

export default styles;