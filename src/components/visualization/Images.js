import React, { Component } from 'react';
import { View, Image, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection, Card, Confirm, Button } from '../common';
import { imageSubmit } from '../../actions/CameraActions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Images extends Component{
  constructor(){
    super();
    this.state = { showModal: false }
  }

  toggleModal(){
    this.setState({ showModal: !this.state.showModal });
  }

  onAccept(){
    // Redux Action
    this.setState({ showModal: false }, this.props.imageSubmit(this.props.image) );
  }

  onDecline(){
    this.setState({ showModal: false });
  }

  render(){
    const { imageContainer, imageStyle, buttonStyle, buttonTextStyle } = styles;
    const { image } = this.props;

    return(
      <View style={imageContainer}>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
        <CardSection>
          <Button
            onPress={this.toggleModal.bind(this)}
            customTextStyle={buttonTextStyle}
            customButtonStyle={buttonStyle}
          >
            Analyze Image
          </Button>
        </CardSection>
        <Confirm
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
          visible={this.state.showModal}
        >
          Analyze this Image?
        </Confirm>
      </View>
    )
  }
}

const styles = {
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    flex: 8,
    width:SCREEN_WIDTH
  },
  buttonTextStyle: {
    color:'#FAFAFA'
  },
  buttonStyle: {
    backgroundColor: '#77d24c'
  }
}

const mapStateToProps = (state) => {
  const { image } = state.camera;
  return { image };
}

export default connect(mapStateToProps, { imageSubmit })(Images);
