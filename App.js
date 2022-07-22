import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , ScrollView, Alert} from 'react-native';
import styles from './App.components.style';
import Task from './components/Task';
import Form from './components/Form';
import { useState } from 'react';
export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) =>
  {
    setTaskList([...taskList,task])
  }
  const handleDeleteTask = (index) =>
  {
    Alert.alert(
      "Thông báo !",
      "Bạn có chắc chắn muốn xóa công việc",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListTmp =[...taskList]
            taskListTmp.splice(index,1)
            setTaskList(taskListTmp)
          },
          style: "cancel"
        },
        { text: "Hủy", onPress: () => {} }
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Danh sách công việc</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item,index) =>
            {
              return <Task key={index} title={item} number={index+1} onDeleteTask={handleDeleteTask}/>
            })
          }
        
        </ScrollView>
        </View>
      <Form onAddTask={handleAddTask}/>

      </View>
      
    );
}


