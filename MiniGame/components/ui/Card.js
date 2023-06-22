import { StyleSheet, View } from 'react-native'
import React from 'react'

import Colors from '../../constants/colors'

const Card = ({ children }) => {
  return (
    <View style={styles.inputContainer}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,                           //Only on RN - Android
        shadowColor: 'black',                   //Only on RN - iOS
        shadowOffset: { width: 0, height: 2},   //Only on RN - iOS
        shadowRadius: 6,                        //Only on RN - iOS
        shadowOpacity: 0.25                     //Only on RN - iOS
    },
})