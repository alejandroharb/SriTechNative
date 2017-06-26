import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, Card, CardSection, Button, Spinner } from '../common';
import { emailChanged, passwordChanged, loginUser } from '../../actions/AuthActions';

class LoginForm extends Component {

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner />
    }

    return(
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({email, password});
  }

  render(){
    return(

      <View>
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
            secureTextEntry
            label="password"
            placeholder="mypassword"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection style={{borderBottomWidth:0}}>
          {this.renderButton()}
        </CardSection>

      </View>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth; //ES6 destructuring
  return { email, password, error, loading };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
