import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, Card, CardSection, Button, Spinner } from '../common';
import { emailChanged, passwordChanged, loginUser } from '../../actions/AuthActions';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <Button
        onPress={this.onButtonPress.bind(this)}
        customButtonStyle={styles.button}
        customTextStyle={styles.buttonText}
        >
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

      <Card style={styles.inputContainer}>
        <CardSection style={styles.cardSection}>
          <Input
            label="email"
            icon="email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            customInputStyle={styles.input}
          />
        </CardSection>

        <CardSection style={styles.cardSection}>
          <Input
            secureTextEntry
            label="password"
            icon="lock"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            customInputStyle={styles.input}
          />
        </CardSection>
      </Card>

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
  },
  input:{
    height: 30
  },
  cardSection: {
    paddingLeft: 5
  },
  button: {
    backgroundColor: '#4285f4',
    elevation:3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0
  },
  buttonText: {
    color: '#FAFAFA'
  },
  inputContainer: {

  }
}

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth; //ES6 destructuring
  return { email, password, error, loading };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
