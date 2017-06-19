import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


class AIResults extends Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <View>
      { console.log("image prop " + this.props.image)}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state inside AIResults component");
  console.log(state);
  const { image, results } = state.camera;
  return { image };
};

export default connect(mapStateToProps, {})(AIResults);
