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
      <CardSection>
        <Button onPress={this.submitNewUser.bind(this)}>
          Submit
        </Button>
      </CardSection>
    )
  }

  render(){
    const { section, subSectionRow, sliderContainer, contentHeaderText, labelStyle, valueLabel, headerText, errorTextStyle } = styles;
    return(
      <ScrollView>

        <Card>

          <CardSection>
            <Input
              label="email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              label="password"
              placeholder="mypassword"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Name"
              placeholder="John"
              onChangeText={this.onNameChange.bind(this)}
              value={this.props.name}
            />
          </CardSection>

          <View style={section}>
            <View style={[contentHeaderText, {marginBottom: 10}]}>
              <Text style={labelStyle}>Birthdate</Text>
            </View>
            <DatePickerIOS
              date={this.props.birthdate}
              mode="date"
              onDateChange={this.onDateChange.bind(this)}
            />
          </View>

          <View style={section}>
            <View style={{marginBottom: 10}}>
              <Text style={labelStyle}>Gender</Text>
            </View>
            <SegmentedControlIOS
              values={['Male', 'Female']}
              selectedIndex={this.props.gender}
              onChange={ (event) => this.onGenderChange(event.nativeEvent.selectedSegmentIndex) }
            />
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
            <View style={sliderContainer}>
              <Slider
                minimumValue={30}
                maximumValue={100}
                step={2}
                value={this.props.weight}
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
            <View style={sliderContainer}>
              <Slider
                minimumValue={0}
                maximumValue={300}
                step={2}
                value={this.props.height}
                onValueChange={this.onHeightChange.bind(this)}
              />
            </View>
          </View>

          <Text style={errorTextStyle}>
            {this.props.error}
          </Text>

          {this.renderButton()}

        </Card>
      </ScrollView>
    )
  }
}

const styles = {
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5
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
    paddingLeft: 20
  },
  sliderContainer: {
    marginTop: 20
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = (state) => {
  const { email, password, name, birthdate, gender, weight, height, error, loading } = state.auth;
  console.log(state.auth);
  return { email, password, name, birthdate, gender, weight, height, error, loading };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, nameChanged, birthdateChanged, genderChanged, weightChanged, heightChanged, userCreate })(SignUp);
