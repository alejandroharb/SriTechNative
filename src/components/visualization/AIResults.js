import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../common';
import { Suggestions } from './components';

class AIResults extends Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    const { image, watsonResults } = this.props;
    const { mainContainer, contentsContainer, imageResultsSummaryContainer, resultsTitle, resultsSubtitle, buttonContainer, buttonStyle } = styles;

    return(
      <View style={ mainContainer }>

        <ScrollView contentContainerStyle={contentsContainer}>
          <View style={imageResultsSummaryContainer}>
            <Image style={{ width: 100, height: 100}} source={ {uri: image} }/>
            <View>
              <Text style={resultsTitle}>{ watsonResults.matchResults ? watsonResults.matchResults[0].class : "No Detection"  }</Text>
            </View>
          </View>

          <View>
            <Suggestions
              title="Suggestions"
              suggestion={ watsonResults.matchResults ? watsonResults.matchResults[0].recommendation : watsonResults.recommendation }
            />
          </View>


          <CardSection style={ buttonContainer }>
              <Button
              customButtonStyle={ buttonStyle }
              >
                Community Health Worker
              </Button>
          </CardSection>
        </ScrollView>

      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    marginTop: 80
  },
  contentsContainer:{
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  imageResultsSummaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:15
  },
  resultsTitle: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 25,
    marginTop: 10
  },
  resultsSubtitle:{
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 40,
    borderBottomWidth: 0
  },
  buttonStyle: {
    height: 60,
    justifyContent: 'center'
  }
}

const mapStateToProps = (state) => {
  const { image, watsonResults } = state.camera;
  return { image, watsonResults };
};

export default connect(mapStateToProps, {})(AIResults);
