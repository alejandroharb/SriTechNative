import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableHighlight, ImagePickerIOS } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CameraPickerModal } from '../common';
import { imageChosen } from '../../actions/CameraActions';

class CamMenu extends Component {
  constructor(){
    super();
    this.state = {
      modalVisible: false
    }

    this.pickImage = this.pickImage.bind(this);
  }

  toggleModal(){
      this.setState({ modalVisible: !this.state.modalVisible});
  }

  onPressCamera(){
    this.setState({ modalVisible: false}, () => {
      Actions.camera();
    });
  }

  onPressLibrary(){
    this.setState({ modalVisible: false}, () => {
      setTimeout( () => this.pickImage(), 500)
    })
  }

  pickImage(){
    //openSelectDialog(config, successCallBack, errorCallBack);
    ImagePickerIOS.openSelectDialog(
      {}, imageUri => {
        console.log(imageUri);
        // Redux update state
        this.props.imageChosen(imageUri);
        Actions.gallery();
      }, cancel => { console.log(cancel)});
  }

  render(){
    return(
      <View>
        <View style={styles.wallpaper}>
          <Icon name="photo-camera" size={250} color={'#dcdcdc'}/>
          <TouchableHighlight style={{marginTop: 50}} onPress={this.toggleModal.bind(this)}>
            <Text style={styles.linkText}>Select an Image to Begin</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex:1}}>
          <CameraPickerModal
            visible={this.state.modalVisible}
            onPressLibrary={ this.onPressLibrary.bind(this) }
            onPressCamera={ this.onPressCamera.bind(this) }
            onPressCancel={ this.toggleModal.bind(this) }
          />
        </View>
      </View>
    )
  }
}

const styles = {
  wallpaper: {
    flex:10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 80
  },
  linkText:{
    color: '#74a9f2'
  }
}

const mapStateToProps = (state) => {
  const { image } = state.camera;
  return { image };
};

export default connect(mapStateToProps, { imageChosen })(CamMenu);
