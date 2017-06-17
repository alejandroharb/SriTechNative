import React, { Component } from 'react';
import { View, ImagePickerIOS, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button } from './common';
import RNFS from 'react-native-fs';
import axios from 'axios';
import { watsonKey, watson_API_url} from '../config/watsonAPI';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Images extends Component{
  constructor(){
    super();
    this.state = { image: null }
  }

  componentWillMount(){
    if (!this.props.image){
      this.pickImage();
    } else {
      this.setState({ image: this.props.image })
    }


  }
  componentDidMount(){
    console.log(`did mount: ${this.state.image}`)
  }

  pickImage(){
    //openSelectDialog(config, successCallBack, errorCallBack);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
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

  renderAnalyzeButton(){
    return(
      <View style={{height:30, flexDirection: 'column', alignItems: 'flex-end', marginBottom: 30}}>
        <Button onPress={this.analyzeImage.bind(this)}>
          Analyze
        </Button>
      </View>
    );
  }

  render(){
    return(
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1, width:SCREEN_WIDTH }} source={{ uri: this.state.image }} >
          { this.renderAnalyzeButton() }
        </Image>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { image } = state.camera;
  return { image };
}

export default connect(mapStateToProps, {})(Images);
