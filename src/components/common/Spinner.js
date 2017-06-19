import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native'

class Spinner extends Component {
  render(){
    return(
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={this.props.size || 'large'}/>
      </View>
    )
  }
};

const styles = {
  spinnerStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { Spinner };
