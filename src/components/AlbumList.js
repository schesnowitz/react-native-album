import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from 'albums/src/components/AlbumDetail';


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
      return this.state.albums.map( album => //.map is an array helper fat arrow gets single album
        <AlbumDetail key={album.title} albumData={album}/> // albumData avail in AlbumDetail
      );
    }

    render() {
        // console.warn(this.state);
      return (
          <ScrollView>
            {this.renderAlbums()}
          </ScrollView>

      );
    }
  } // classes do not requre semi-colon to close //

  export default AlbumList;
