import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
  class AlbumList extends Component {

    componentWillMount() {
      console.warn("is component mounting?");
    }

    render() {
      return (
          <View>
            <Text>Album List</Text>
          </View>

      );
    }
  } // classes do not requre semi-colon to close //

  export default AlbumList;
