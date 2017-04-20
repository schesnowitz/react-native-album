import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

  const AlbumDetail = (props) => {
    const {
      headerStyles,
      thumbnailStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageCardStyle
      } = styles; //optional

    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image style={thumbnailStyle} source={{uri: props.albumData.thumbnail_image}} />
          </View>
            <View style={headerStyles}>
              <Text style={headerTextStyle}>{props.albumData.title}</Text>
              <Text>{props.albumData.artist}</Text>
            </View>
        </CardSection>
        <CardSection>
        <Image  style={imageCardStyle} source={{uri: props.albumData.image}}/>
        </CardSection>
        <CardSection>
          <Button hasBeenPressed={() => Linking.openURL(props.albumData.url)}>
          Buy on Amazon
          </Button>
        </CardSection>
      </Card>
    );
  };

  const styles = {
    headerStyles: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 19
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: "center",
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageCardStyle: {
      height: 300,
      flex: 1,
      width: null
    }
  };
  export default AlbumDetail;
