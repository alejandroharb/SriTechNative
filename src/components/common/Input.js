import React, { Component } from 'react';
import { TextInput, View, Text, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Input extends Component {
  render() {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return(
      <View style={containerStyle}>
        <Icon size={20} name={this.props.icon} color="#dcdcdc"/>
        <Text style={[labelStyle, this.props.customTextStyle]}>{this.props.label}</Text>
        <TextInput
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          autoCorrect={false}
          style={[inputStyle, this.props.customInputStyle]}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          onEndEditing={ () => Keyboard.dismiss()}
        />
      </View>
    )
  }
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:23,
    flex:2
  },
  labelStyle: {
    fontSize:15,
    paddingLeft:5,
    flex:1
  },
  containerStyle: {
    height:30,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  }
};

export { Input };
