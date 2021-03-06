import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children, customTextStyle, customButtonStyle}) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyle, customButtonStyle]}>
            <Text style={[textStyle, customTextStyle]} >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

//need to export as object if going to use and index.js to export * from './Button'
//could use ES6 to condense this to: export { Button };
export { Button };
