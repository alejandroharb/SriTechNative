import React, { Component } from 'react';
import { View, Image, Text, Dimensions, CameraRoll, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';
import { imageTaken } from '../actions/CameraActions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class CameraComponent extends Component {
  constructor(){
    super();
    this.state = { image: null, galleryIcon: "" }
  }

  componentWillMount(){
    this.fetchFirstImage();
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => {
        console.log(data);
        this.props.imageTaken(data.path);
        Actions.gallery();
      })
      .catch(err => console.error(err));
  }

  fetchFirstImage() {
    //react native module, fetches first image from device gallery
    CameraRoll.getPhotos({
      first: 1,
      assetType: 'Photos'
    })
      .then( roll => {
        console.log(roll.edges[0].node.image.uri);

        this.setState({ galleryIcon: roll.edges[0].node.image.uri });
      });
  }

  render(){
    return(
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={ styles.camera }
          aspect={Camera.constants.Aspect.stretch}
        >
          <View style={styles.cameraBtnContainer}>
            <TouchableHighlight onPress={()=> Actions.gallery()}>
              <Image source={{uri: this.state.galleryIcon}} style={styles.galleryIcon} />
            </TouchableHighlight>
            <Text>
              <Icon name="camera" size={65} color="#FAFAFA" onPress={this.takePicture.bind(this)} />
            </Text>
            <Text>
              <IonIcon name="ios-reverse-camera" style={styles.cameraReverseIcon} size={50} color="#FAFAFA" />
            </Text>

          </View>
        </Camera>
      </View>

    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  camera: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  cameraBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    backgroundColor: '#000'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  galleryIcon: {
    width: 40,
    height: 40,
    marginLeft: 5
  },
  cameraReverseIcon:{
    marginRight: 10
  }
};

const mapStateToProps = (state) => {
  const { image } = state.camera;
  return { image };
}

export default connect(mapStateToProps, { imageTaken })(CameraComponent);
