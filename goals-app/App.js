import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [goals, setGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const addGoalHandler = (text) => {
    setGoals(prevState => [...prevState, {text, id: Math.random().toString()}])
    closeModal()
  }

  const deleteGoalHandler = (id) => {
    setGoals(prevState => {
      return prevState.filter((goal) => goal.id !== id)
    })
  }

  const openModal = () => setModalIsVisible(true)
  const closeModal = () => setModalIsVisible(false)

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add new goal' color='#5e0acc' onPress={openModal} />
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} closeModal={closeModal} />
        <View style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={itemData => {
            return <GoalItem 
                      id={itemData.item.id}
                      text={itemData.item.text} 
                      onDeleteItem={deleteGoalHandler} 
                    />
          }}>

          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#cca6ff"
  },
  goalsContainer: {
    flex: 5
  },

});
