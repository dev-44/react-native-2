import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import NumberContainer from '../components/game/NumberContainer'
import Title from '../components/ui/Title'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionsText from '../components/ui/InstructionsText'

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min)

    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    
    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber])

    function nextGuessHandler(direction) {

        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{text: "Sorry", style: 'cancel'}])
        }

        if(direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
    }

  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionsText style={styles.InstructionsText}>Higher or Lower</InstructionsText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name='md-remove' size={24} color='white' />
                    </PrimaryButton> 
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name='md-add' size={24} color='white' />
                </PrimaryButton>
                </View>
            </View>
        </Card>
        {/* <View>LOG ROUNDS</View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonContainer: {
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    InstructionsText: {
        marginBottom: 12
    }
})

export default GameScreen