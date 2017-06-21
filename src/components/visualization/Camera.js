import React, { Component } from 'react';
import { View, Image, Text, Dimensions, CameraRoll, TouchableHighlight, ImagePickerIOS } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';
import { imageChosen } from '../../actions/CameraActions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class CameraComponent extends Component {
  constructor(){
    super();
    this.state = {
      image: null,
      galleryIcon: "",
      cameraOrientation: Camera.constants.Type.back
    }

    this.pickImage = this.pickImage.bind(this);
  }

  componentWillMount(){
    this.fetchFirstImage();
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => {
        this.props.imageChosen(data.path);
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
        this.setState({ galleryIcon: roll.edges[0].node.image.uri });
      });
  }

  reverseCamera(){
    switch(this.state.cameraOrientation){
      case Camera.constants.Type.front:
        return this.setState({ cameraOrientation: Camera.constants.Type.back});
      case Camera.constants.Type.back:
        return this.setState({ cameraOrientation: Camera.constants.Type.front});
      default:
        return this.setState({ cameraOrientation: Camera.constants.Type.back});
    }
  }

  pickImage(){
    console.log("tapped gallery icon")
    //openSelectDialog(config, successCallBack, errorCallBack);
    ImagePickerIOS.openSelectDialog(
      {}, imageUri => {
        // Redux update state
        this.props.imageChosen(imageUri);
        Actions.gallery();
      }, cancel => { console.log(cancel)});
  }

  render(){
    return(
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={ styles.camera }
          type={ this.state.cameraOrientation }
          aspect={Camera.constants.Aspect.stretch}
        >
          <View style={styles.cameraBtnContainer}>
            <TouchableHighlight onPress={()=> this.pickImage()}>
              <Image source={{uri: this.state.galleryIcon}} style={styles.galleryIcon} />
            </TouchableHighlight>
            <Text>
              <Icon name="camera" size={65} color="#FAFAFA" onPress={this.takePicture.bind(this)} />
            </Text>
            <TouchableHighlight onPress={this.reverseCamera.bind(this)} >
              <Text>
                <IonIcon name="ios-reverse-camera" style={styles.cameraReverseIcon} size={50} color="#FAFAFA" />
              </Text>
            </TouchableHighlight>

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

export default connect(mapStateToProps, { imageChosen })(CameraComponent);
