import React, {Component} from 'react';
import { View, Text } from 'react-native';

class RowText extends Component {
  render(){
    const { subSectionRow, labelStyle, valueLabel } = styles;
    return(
      <View style={subSectionRow}>
        <View>
          <Text style={labelStyle}>{this.props.label}</Text>
        </View>
        <View>
          <Text style={valueLabel}>{this.props.value}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  subSectionRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10
  },
  valueLabel: {
    marginRight: 15,
    fontSize: 18
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 20
  }
}

export default RowText ;
