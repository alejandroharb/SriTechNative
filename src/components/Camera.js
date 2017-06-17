import React, { Component } from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';
import { imageTaken } from '../actions/CameraActions';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class CameraComponent extends Component {
  constructor(){
    super();
    this.state = { image: null }
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
            <Text>
              <Icon name="photo" size={60} color="#FAFAFA" onPress={ () => Actions.gallery()} />
              <Icon name="camera" size={60} color="#FAFAFA" onPress={this.takePicture.bind(this)} />
              <Icon name="camera_front" size={60} color="#FAFAFA" />
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

  }
};

const mapStateToProps = (state) => {
  const { image } = state.camera;
  return { image };
}

export default connect(mapStateToProps, { imageTaken })(CameraComponent);
