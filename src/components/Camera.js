import React, { Component } from 'react';
import { View, ImagePickerIOS, Image, Text } from 'react-native';
import Camera from 'react-native-camera';
import { watsonKey, watson_API_url} from '../config/watsonAPI';
import RNFS from 'react-native-fs';
import axios from 'axios';

class CameraComponent extends Component {
  constructor(){
    super();
    this.state = { image: null }
  }

  componentDidMount(){
    // this.pickImage();
  }

  pickImage(){
    //openSelectDialog(config, successCallBack, errorCallBack);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
      this.analyzeImage();
    }, error => console.error(error));
  }

  analyzeImage(){
    let formData = new FormData();
    formData.append('images_file', {uri: this.state.image });
    formData.append('parameters', {uri: RNFS.MainBundlePath + '/myparams.json' })
    axios.post(watson_API_url, formData)
      .then( response => { console.log(JSON.stringify(response.data, null, 2))})
      .catch( error => {console.log(error)});
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  render(){
    return(
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
        <View style={{ flex: 1 }}>
          {this.state.image?
            <Image style={{ flex: 1 }} source={{ uri: this.state.image }} /> : null
          }
        </View>
      </View>

    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
};


export default CameraComponent;
