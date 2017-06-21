import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../common';
import { Suggestions } from './components';
import NavBar from '../common/NavBar';

class AIResults extends Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    const { image, watsonResults } = this.props;
    const { mainContainer, contentsContainer, imageResultsSummaryContainer, resultsTitle } = styles;
    return(
      <View style={ mainContainer }>
        <View style={contentsContainer}>

          <View>
            <Text style={resultsTitle}>score: { watsonResults[0].score } - { watsonResults[0].class }</Text>
          </View>

          <Card>
            <CardSection>
              <View style={imageResultsSummaryContainer}>
                <Image style={{ width: 100, height: 100}} source={ {uri: image} }/>
                <Text> Text About Results </Text>
              </View>
            </CardSection>
          </Card>

          <Suggestions
            title="Suggestions"
          />

        </View>
        <NavBar />
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end'
  },
  contentsContainer:{
    flex: 8
  },
  imageResultsSummaryContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  resultsTitle: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 24
  }
}

const mapStateToProps = (state) => {
  console.log("state inside AIResults component");
  console.log(state);
  const { image, watsonResults } = state.camera;
  return { image, watsonResults };
};

export default connect(mapStateToProps, {})(AIResults);
