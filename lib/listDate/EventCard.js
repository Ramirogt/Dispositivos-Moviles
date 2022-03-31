import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import {
    formatDate,
    getCountdownParts,
} from './api';

const styles = StyleSheet.create(
    { 
    card: {
        flexDirection: "row",
        backgroundColor: '#585858',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
        height: 200
    },
    box: { 
        flex:1,
        flexDirection: "column"
    },
    box1: { 
        flex: 5,
        padding:5,
        paddingTop:10,
        backgroundColor: '#585858',
        justifyContent: "center"
        
        
    },
    box2: {
        flex: 8,
        padding: 12,
        paddingTop: 10,
        margin: 5,
        backgroundColor: '#585858',
        justifyContent: "center"
    },
    text: { 
        flexDirection: "column"
    },
    text1: {
        color:"black",
        fontWeight:"bold",
        fontSize:"15",
        justifyContent: "center"
    },
    text2: {
        fontWeight:"bold",
        fontSize:"15",
        justifyContent: "center"
    },
    text3: {
        padding: 5,
        fontWeight:"bold",
        fontSize:"15",
        justifyContent: "center",
        margin: 4,
        backgroundColor:"#A8A8A8",
        borderRadius: 7

    },
});

export default function EventCard ({ event }){

    return( 
        <View style={styles.card}>
            <View style={[styles.box, styles.box1]}>
            <Image
                style={{width: '100%', height: '50%'}}
                source={{uri:'https://i.blogs.es/00c7b3/dualshock-4-ps4-windows-mac/450_1000.jpg'}}
            />
            </View>
            <View style={[styles.box, styles.box2]}>
                <View style={[styles.box, styles.text1]}>
                    <Text>Mando de Play Station 4 (original)</Text>
                </View>
                <View style={[styles.text2]}>
                <Text>Mas Informacion...</Text>
                </View>
                <View style={[]}>
                <Text></Text>
                </View>
                <View style={[styles.text3]}>
                <Text>comentarios</Text>
                </View>
            </View>
</View> 
    ); 
}

EventCard.propTypes = {
    event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
    }),
};