import React, { Component } from 'react';
import { View, Text, DatePickerIOS, SegmentedControlIOS, Slider, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Input, Card, CardSection, Button, Spinner } from '../common';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  nameChanged,
  birthdateChanged,
  genderChanged,
  weightChanged,
  heightChanged,
  userCreate
} from '../../actions/AuthActions';

class SignUp extends Component {

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onNameChange(text){
    this.props.nameChanged(text);
  }

  onDateChange(date){
    this.props.birthdateChanged(date);
  }

  onGenderChange(gender) {

    this.props.genderChanged(gender);
  }

  onWeightChange(weight) {
    this.props.weightChanged(weight);
  }

  onHeightChange(height) {
    this.props.heightChanged(height);
  }

  submitNewUser() {
    const { email, password, name, birthdate, gender, weight, height } = this.props;
    this.props.userCreate({ email, password, name, birthdate, gender, weight, height });
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner />
    }

    return(

        <Button
          onPress={this.submitNewUser.bind(this)}
          customButtonStyle={styles.button}
          customTextStyle={styles.buttonText}
        >
          Submit
        </Button>

    )
  }

  render(){
    const { mainContainer, section, contentContainer, customCardSecStyle,  subSectionRow, contentHeaderText, inputTextStyle, labelStyle, valueLabel, headerText, errorTextStyle } = styles;
    return(
      <ScrollView contentContainerStyle={mainContainer}>

          <CardSection style={customCardSecStyle}>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              customTextStyle={inputTextStyle}
            />
          </CardSection>

          <CardSection style={customCardSecStyle}>
            <Input
              label="Password"
              placeholder="mypassword"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              customTextStyle={inputTextStyle}
            />
          </CardSection>

          <CardSection style={customCardSecStyle}>
            <Input
              label="Full Name"
              placeholder="John Doe"
              onChangeText={this.onNameChange.bind(this)}
              value={this.props.name}
              customTextStyle={inputTextStyle}
            />
          </CardSection>

          <View style={section}>
            <View style={contentHeaderText}>
              <Text style={labelStyle}>Birthdate</Text>
            </View>
            <View style={contentContainer}>
              <DatePickerIOS
                date={this.props.birthdate}
                mode="date"
                onDateChange={this.onDateChange.bind(this)}
              />
            </View>
          </View>

          <View style={section}>
            <View style={{marginBottom: 15}}>
              <Text style={labelStyle}>Gender</Text>
            </View>
            <View style={contentContainer}>
              <SegmentedControlIOS
                values={['Male', 'Female']}
                selectedIndex={this.props.gender}
                onChange={ (event) => this.onGenderChange(event.nativeEvent.selectedSegmentIndex) }
              />
            </View>
          </View>

          <View style={section}>
            <View style={subSectionRow}>
              <View>
                <Text style={labelStyle}>Weight: </Text>
              </View>
              <View>
                <Text style={valueLabel}>{this.props.weight} kg</Text>
              </View>
            </View>
            <View style={contentContainer}>
              <Slider
                minimumValue={30}
                maximumValue={100}
                step={2}
                value={30}
                onValueChange={this.onWeightChange.bind(this)}
              />
            </View>
          </View>

          <View style={section}>
            <View style={subSectionRow}>
              <View>
                <Text style={labelStyle}>Height: </Text>
              </View>
              <View>
                <Text style={valueLabel}>{this.props.height} cm</Text>
              </View>
            </View>
            <View style={contentContainer}>
              <Slider
                minimumValue={0}
                maximumValue={300}
                step={2}
                value={100}
                onValueChange={this.onHeightChange.bind(this)}
              />
            </View>
          </View>

          <Text style={errorTextStyle}>
            {this.props.error}
          </Text>

          {this.renderButton()}


      </ScrollView>
    )
  }
}

const styles = {
  mainContainer: {
    marginTop: 60,
    paddingBottom: 60
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5
  },
  customCardSecStyle:{
    marginTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
  },
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
    paddingLeft: 10,
    paddingBottom: 15
  },
  sliderContainer: {
    marginTop: 20,
    paddingLeft: 70
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    paddingTop: 10
  },
  contentContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#4285f4',
    elevation:3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop:10
  },
  buttonText: {
    color: '#FAFAFA'
  },
  inputTextStyle: {
    fontSize: 18,
    paddingLeft: 10
  }
}

const mapStateToProps = (state) => {
  const { email, password, name, birthdate, gender, weight, height, error, loading } = state.auth;
  return { email, password, name, birthdate, gender, weight, height, error, loading };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, nameChanged, birthdateChanged, genderChanged, weightChanged, heightChanged, userCreate })(SignUp);
