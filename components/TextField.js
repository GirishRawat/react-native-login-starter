import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    placeholder: PropTypes.string,
    shape: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    secureTextEntry: PropTypes.bool,
};

export default class TextField extends React.Component {
    static propTypes = propTypes;

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        const { placeholder, shape, type, secureTextEntry } = this.props;
        let shapeStyle;

        return (
            <View>
                <TouchableOpacity style={styles.defaultView}>
                    <TextInput
                        style={styles.defaultTextField}
                        onChangeText={(text) => this.setState({ text })}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        underlineColorAndroid='transparent'
                    />
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    defaultTextField: {
        flexDirection: 'row',
        overflow: 'hidden',
        width: 320,
        height: 50,
        marginLeft: 20
        // marginLeft: 5,
        // borderLeftWidth: 2,

    },
    defaultView: {
        marginTop: 10,
        flexDirection: 'row',
        overflow: 'hidden',
        width: 320,
        height: 50,
        borderWidth: 1,
        borderRadius: 50,
    },
    newView: {
        marginTop: 10,
        flexDirection: 'row',
        overflow: 'hidden',
        width: 320,
        height: 50,
        // borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#E5E5E5',
    }
});
