import React, { Component } from 'react';
import { View, Text, Image, ImagePickerIOS, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RowText } from '../common/RowText';
import moment from 'moment';

class Profile extends Component {
  constructor(){
    super();
    this.state = {
      birthdate: "",
      age: 0,
      gender: ''
    }
  }

  componentDidMount(){
    let now = moment();
    let birth_date = moment(this.props.birthdate).format('MM/DD/YY');
    let age = now.diff(moment(this.props.birthdate), 'years');
    let gender = ''
    this.props.gender == 0 ? gender = 'M' : gender = 'F'
    this.setState({ birthdate: birth_date, age: age, gender: gender });
  }

  render(){
    const { mainContainer, contentContainer, topContainer, image, subSectionRow, labelStyle, valueLabel, userName } = styles;

    return(
      <View style={mainContainer}>
        <View style={topContainer}>
          <Icon name="person" size={90} color="#dcdcdc" style={image}/>
          <Text style={userName}>{this.props.name}</Text>
        </View>

        <View style={contentContainer}>
          <ScrollView style={{flex:1, flexDirection: 'column', position:'relative'}}>
            <View style={subSectionRow}>
              <View>
                <Text style={labelStyle}>Date of Birth:</Text>
              </View>
              <View>
                <Text style={valueLabel}>{this.state.birthdate}</Text>
              </View>
            </View>

            <View style={subSectionRow}>
              <View>
                <Text style={labelStyle}>Age:</Text>
              </View>
              <View>
                <Text style={valueLabel}>{this.state.age}</Text>
              </View>
            </View>

            <View style={subSectionRow}>
              <View>
                <Text style={labelStyle}>Sex:</Text>
              </View>
              <View>
                <Text style={valueLabel}>{this.state.gender}</Text>
              </View>
            </View>

            <View style={subSectionRow}>
              <View>
                <Text style={labelStyle}>Height:</Text>
              </View>
              <View>
                <Text style={valueLabel}>{this.props.height}cm</Text>
              </View>
            </View>

            <View style={subSectionRow}>
              <View>
                <Text style={labelStyle}>Weight:</Text>
              </View>
              <View>
                <Text style={valueLabel}>{this.props.weight}kg</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  topContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285f4'
  },
  contentContainer:{
    flex: 3,
    flexDirection: 'column'
  },
  image: {
    backgroundColor: '#FAFAFA',
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 5
  },
  subSectionRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:30,
    marginLeft: 25,
    marginRight: 25
  },
  valueLabel: {
    marginRight: 15,
    fontSize: 18,
    color:'#9c9c9c'
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: '600'
  },
  userName: {
    marginTop: 20,
    fontSize: 24,
    color: '#FAFAFA',
    fontWeight: '500'
  }
}

const mapStateToProps = (state) => {
  const { name, birthdate, gender, weight, height } = state.navBar.user;
  return { name, birthdate, gender, weight, height };
}

export default connect(mapStateToProps, {})(Profile);
