import { View, Button, StyleSheet, TextInput, Modal, Image } from 'react-native'
import { useState } from 'react'

const GoalInput = ({ onAddGoal, visible, closeModal }) => {

    const [text, setText] = useState('')

    function goalInputHandler (text) {
        setText(text)
      }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput 
                    value={text}
                    style={styles.textInput} 
                    placeholder='Your course goal!' 
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Add Goal' 
                            onPress={() => {
                                onAddGoal(text)
                                setText('')
                            }}
                            color='#5e0acc'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={closeModal} color='#f31282' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})

export default GoalInput