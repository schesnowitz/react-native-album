import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

  class AlbumList extends Component {
    state = { albums: [] }; //set initial state
    componentWillMount() {
      // console.warn("is component mounting?");
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        // .then(response => console.warn(response));
        .then(response => this.setState({
          albums: response.data
        }));
    }
    renderAlbums() { //this is called insud the render
      return this.state.albums.map( album => <Text>{album.title}</Text>); //.map is an array helper fat arrow gets single album
    }

    render() {
        // console.warn(this.state);
      return (
          <View>
            <Text>{this.renderAlbums()}</Text> 
          </View>

      );
    }
  } // classes do not requre semi-colon to close //

  export default AlbumList;
