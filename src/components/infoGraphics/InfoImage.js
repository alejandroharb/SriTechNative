import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

let info1 = require('../../assets/images/infograph.jpg');
let info2 = require('../../assets/images/infograph2.jpg');
let info3 = require('../../assets/images/infograph3.jpg');
let info4 = require('../../assets/images/infograph4.jpg');

class InfoImage extends Component {
  constructor(){
    super();

  }


  renderImage() {
    if(this.props.image){
      switch(this.props.image){
        case 'infograph':
          return(
            <View style={{flex: 1}}>
              <Image style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT }} source={info1}/>
            </View>
          )
        case 'infograph2':
          return(
            <View style={{flex: 1}}>
              <Image style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT }} source={info2}/>
            </View>
          )
        case 'infograph3':
          return(
            <View style={{flex: 1}}>
              <Image style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT }} source={info3}/>
            </View>
          )
        case 'infograph4':
          return(
            <View style={{flex: 1}}>
              <Image style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT }} source={info4}/>
            </View>
          )
      }


    } else {
      Actions.info();
    }
  }

  render(){  
    return(
        <View>
          {this.renderImage()}
        </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { image } = state.infoGraphics;
  console.log( {image } );
  return { image };
};

export default connect(mapStateToProps, {})(InfoImage);
