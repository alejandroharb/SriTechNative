import React, { Component } from 'react';
import { View, ImagePickerIOS, Image } from 'react-native';

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
    }, error => console.error(error));
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
