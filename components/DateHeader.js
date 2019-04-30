import React from 'react'
import { Text, View, StatusBar} from 'react-native'
import { purple } from '../utils/colors';

export default function DateHeader( {date} ) {
  return (
    <View>
        <Text style={{color: purple, fontSize: 26, marginTop:  StatusBar.currentHeight}}>
            { date }
        </Text>
    </View>
  )
}
