import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../common';
import Carousel from 'react-native-snap-carousel';
import { viewImage } from '../../actions/InfographActions';

const horizontalMargin = 20;
const slideWidth = 200;

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = SCREEN_HEIGHT * 0.8;

class Info extends Component {
  constructor(){
    super();
  }
  render () {
    const { mainContainer, img, imgCover, slide, imgCoverTitle, imgCoverSubtitle } = styles;
      return (
        <View style={mainContainer}>
          <Carousel
            ref={(carousel) => { this._carousel = carousel; }}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={itemWidth}
          >


            <Card style={slide}>
              <CardSection>
                <Image style={img} source={require('../../assets/images/infograph2.jpg')} >
                  <TouchableOpacity activeOpacity={1} style={imgCover} onPress={ () => this.props.viewImage('infograph2')}>
                    <Text style={imgCoverTitle}> Foot Cleaning </Text>
                    <Text style={imgCoverSubtitle}> Learn to prevent infections by taking care of your feet! </Text>
                  </TouchableOpacity>
                </Image>
              </CardSection>
            </Card>


            <Card style={slide}>
              <CardSection>
                <Image style={img} source={require('../../assets/images/infograph3.jpg')} >
                  <TouchableOpacity activeOpacity={1} style={imgCover} onPress={ () => this.props.viewImage('infograph3')}>
                    <Text style={imgCoverTitle}> Preventing Diabetic Foot Ulcers </Text>
                    <Text style={imgCoverSubtitle}> Diabetic foot ulcers can result in amputations. Most often, people are debilitated and prevented from working and earning a living. </Text>
                  </TouchableOpacity>
                </Image>
              </CardSection>
            </Card>

            <Card style={slide}>
              <CardSection>
                <Image style={img} source={require('../../assets/images/infograph.jpg')} >
                  <TouchableOpacity activeOpacity={1} style={imgCover} onPress={ () => this.props.viewImage('infograph')}>
                    <Text style={imgCoverTitle}> Mobile Impact in Sri Lanka </Text>
                    <Text style={imgCoverSubtitle}> Learn about the power within your phone! </Text>
                  </TouchableOpacity>
                </Image>
              </CardSection>
            </Card>

            <Card style={slide}>
              <CardSection>
                <Image style={img} source={require('../../assets/images/infograph4.jpg')} >
                  <TouchableOpacity activeOpacity={1} style={imgCover} onPress={ () => this.props.viewImage('infograph4') }>
                    <Text style={imgCoverTitle}> Foot Health </Text>
                    <Text style={imgCoverSubtitle}> Learn how to maintain healthy feet! </Text>
                  </TouchableOpacity>
                </Image>
              </CardSection>
            </Card>
          </Carousel>
        </View>
      );
  }
}

const styles = {
  mainContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA'
  },
  slide: {
    width: itemWidth,
    height: itemHeight,
    alignItems: 'center',
    margin: 0,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
    shadowRadius: 5
  },
  img: {
    width: itemWidth,
    height: itemHeight,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  imgCover: {
    width: itemWidth,
    height: itemHeight/3,
    backgroundColor: '#FAFAFA',
    opacity: 0.9
  },
  imgCoverTitle: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    padding: 15
  },
  imgCoverSubtitle: {
    fontSize: 16,
    alignSelf: 'center',
    padding: 15
  }
}

const mapStateToProps = (state) => {
  const { image } = state.infoGraphics;
  return { image }
};

export default connect(mapStateToProps, { viewImage })(Info);
