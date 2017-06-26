import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const CameraPickerModal = ({ visible, onPressLibrary, onPressCamera, onPressCancel }) => {
  //destructuring
  const { containerStyle, textStyle, cardSectionStyle, topContainer, button } = styles;

  return(
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClone={() => {}}
    >
      <View style={containerStyle}>

        <View style={topContainer} >
          <CardSection style={cardSectionStyle}>
            <Button onPress={onPressCamera} customButtonStyle={[button, {borderBottomWidth: 1, borderColor: '#ddd'}]} >Take Photo</Button>

            <Button onPress={onPressLibrary} customButtonStyle={button} >Choose from Library</Button>
          </CardSection>
        </View>

        <CardSection style={{marginTop: 7, borderRadius: 15}}>
          <Button onPress={onPressCancel} customButtonStyle={button} >Cancel</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    borderRadius: 15,
    flex:1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 0
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    flexDirection: 'column',
    position: 'relative',
    flex:1,
    justifyContent: 'flex-end',
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 5
  },
  topContainer: {
    height: 100
  },
  button: {
    borderWidth: 0,
    flex:1
  }
}

export { CameraPickerModal };
