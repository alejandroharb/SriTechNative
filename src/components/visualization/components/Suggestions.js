import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection } from '../../common';

const Suggestions = ({title, suggestion }) => {
  const { container, suggestionsTitle, suggestionTextStyle } = styles;
  return(

      <View style={container}>
        <View>
          <Text style={suggestionsTitle}> { title } </Text>
        </View>
        <Text style={ suggestionTextStyle }>{ suggestion }</Text>
      </View>

  )
}

const styles = {
  suggestionsTitle: {
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  container: {
    flexDirection:'column',
    alignItems: 'center',
    padding: 10
  },
  suggestionTextStyle:{
    fontSize: 16,
    lineHeight: 24,
    padding: 10
  }
}

export { Suggestions };
