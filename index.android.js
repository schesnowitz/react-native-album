
//import library to assist with creation of Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from 'albums/src/components/Header'
import AlbumList from 'albums/src/components/AlbumList' 

// create the Component
    const App = () => {
      return (
        <View>
          <Header headerText={'Sexy Records'}/>
          <AlbumList />
        </View>
      );
    };


// send it to the device     albums is the name of the app and App is our Component  "const App"
AppRegistry.registerComponent('albums', () => App);
