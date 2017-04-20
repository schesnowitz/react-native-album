import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

  const Button = ({hasBeenPressed, children}) => {
    const {buttonStyle, textStyle} = styles;
    return (
      // <TouchableOpacity onPress={() => console.error('button pressed')} style={buttonStyle}>
      <TouchableOpacity onPress={hasBeenPressed} style={buttonStyle}>
        <Text style={textStyle}>
        {children} 
        </Text>
      </TouchableOpacity>

    );
  };

  const styles = {
    textStyle: {
      alignSelf: 'center',
      color: 'black',
      fontSize: 15,
      fontWeight: '500',
      paddingTop: 10,
      paddingBottom: 10
    },
    buttonStyle: {
      flex: 1, // sets button to fill area
      alignSelf: 'stretch', //flexbox style -- will position based on flexbox rules
      backgroundColor: 'teal',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'black',
      marginLeft: 5,
      marginRight: 5
    }
  };

export default Button;
