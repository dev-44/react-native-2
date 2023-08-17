import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";

import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const { width, height } = useWindowDimensions()

    const numberInputHandler = (text) => {
        setEnteredNumber(text)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
        }

        onPickNumber(chosenNumber)
    }

    const marginTopDistance = height < 380 ? 30 : 100

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <Title>Guess my number</Title>
                    <Card>
                        <InstructionsText>Enter a number</InstructionsText>
                        <TextInput 
                            style={styles.numberInput} 
                            maxLength={2} 
                            keyboardType="number-pad" 
                            autoCapitalize="none" 
                            autoCorrect={false} 
                            value={enteredNumber} 
                            onChangeText={numberInputHandler}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>    
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        //marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    },
})

export default StartGameScreen