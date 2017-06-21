import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection } from '../../common';

const Suggestions = ({title}) => {
  const { container, suggestionsTitle } = styles;
  return(
    <Card>
      <CardSection style={container}>
        <View>
          <Text style={suggestionsTitle}> { title } </Text>
        </View>
        <Text> Suggestion 1 </Text>
        <Text> Suggestion 2 </Text>
      </CardSection>
    </Card>
  )
}

const styles = {
  suggestionsTitle: {
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center'
  },
  container: {
    flexDirection:'column',
    alignItems: 'center'
  }
}

export { Suggestions };
