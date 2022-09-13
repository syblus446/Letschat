//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';

// create a component
const Message = ({route, navigation}) => {

    console.log("route",route)
    return (
       <WrapperContainer>
        <View>
            <Image/>
        </View>
       </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Message;
