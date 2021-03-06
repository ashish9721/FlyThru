import { StyleSheet } from 'react-native'
import { Platform } from 'react-native'

const styles = StyleSheet.create({
    touch: {
        alignSelf: 'flex-start'
    },
    background: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontFamily: Platform.OS === 'ios' ? 'MFGLabsIconset-Regular' : 'mfglabsiconset-webfont',
        color: '#3E5F6C'
    }
})

export default styles