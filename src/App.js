import React, { Component } from 'react';
import { View, ImagePickerIOS, Image } from 'react-native';

import { watsonKey, watson_API_url} from './config/watsonAPI';
import request from 'react-native-request';
import RNFS from 'react-native-fs';
import axios from 'axios';
import RNFetchBlob from 'react-native-fetch-blob';

export default class App extends Component {
  constructor(){
    super();
    this.state = { image: null }
  }
  componentDidMount(){
    this.pickImage();
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

  render(){
    return(
      <View style={{ flex: 1 }}>
        {this.state.image?
          <Image style={{ flex: 1 }} source={{ uri: this.state.image }} /> : null
        }
      </View>
    )
  }
}
