
//import library to assist with creation of Component

import React from 'react';
import { Text, View } from 'react-native';
// create the Component
  const Header = () => {
    // const { textStyle, viewStyle } = styles;

    return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Records</Text>
        </View>

      );
    };

    const styles = {
      viewStyle: {
        backgroundColor: '#f0f8ff',
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 0,
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
      },
      textStyle: {
        fontSize: 25,
        color: '#008080'
      }
    };
// make the Component available to other parts of the application
export default Header;
