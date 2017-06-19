import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const CameraPickerModal = ({ visible, onPressLibrary, onPressCamera, onPressCancel }) => {
  //destructuring
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return(
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClone={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Button onPress={onPressCamera} >Take Photo</Button>
          <Button onPress={onPressLibrary}>Choose from Library</Button>
        </CardSection>
        <CardSection>
          <Button onPress={onPressCancel}>Cancel</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex:1,
    justifyContent: 'center'
  }
}

export { CameraPickerModal };
