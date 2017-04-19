import React, { Component } from 'react';
import { View, Text } from 'react-native';

  const AlbumDetail = (props) => {
    return (
      <View>
        <Text>{props.albumData.title}</Text>
      </View>
    );
  };

  export default AlbumDetail;
