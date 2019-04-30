import React from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'
import MetricCounter from './MetricCounter';

export default function UdaciSlider({ max, unit, step, value, onChange }) {
    return (
        <View style={styles.row}>
            <Slider
                style={{flex:1}}
                step={step}
                value={value}
                maximumValue={max}
                minimumValue={0}
                onValueChange={onChange}
            />
            <MetricCounter value={value} unit={unit} />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    }
})