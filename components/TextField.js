import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    placeholder: PropTypes.string,
    shape: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    secureText: PropTypes.bool,
};

export default class TextField extends React.Component {
    static propTypes = propTypes;

    constructor(props) {
        super(props);
        const { secureText } = this.props
        this.state = {
            text: '',
            hidePassword: secureText
        };
    }

    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    render() {
        const { placeholder, shape, type, secureText } = this.props;
        let shapeStyle, textTypeStyle;
        let placeholderTextColorVar, textInputStyle;

        if (shape === 'round') {
            shapeStyle = {
                borderRadius: 10,
            };
        } else if (shape === 'circle') {
            shapeStyle = {
                borderRadius: 50,
            };
        }

        if (type === 'secondary') {
            placeholderTextColorVar = '#504141'
            textTypeStyle = {
                backgroundColor: '#E5E5E5',
                borderWidth: 0
            }
            // textInputStyle = {styles.newView}
        }

        let secureTextContent;
        if (secureText === true) {
            secureTextContent = (
                <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>
                    <Image source={(this.state.hidePassword) ? require('../images/hide.png') : require('../images/view.png')} style={styles.btnImage} />
                </TouchableOpacity>
            )
        }

        return (
            <View>
                <TouchableOpacity style={[styles.defaultView, shapeStyle]}>
                    <TextInput
                        style={[styles.defaultTextField]}
                        onChangeText={(text) => this.setState({ text })}
                        placeholderTextColor={[placeholderTextColorVar]}
                        placeholder={placeholder}
                        secureTextEntry={this.state.hidePassword}
                        underlineColorAndroid='transparent'
                    />
                    {secureTextContent}
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    defaultTextField: {
        flexDirection: 'row',
        overflow: 'hidden',
        flex: 1,
        margin: 10,
    },
    defaultView: {
        flexDirection: 'row',
        overflow: 'hidden',
        width: 320,
        height: 50,
        borderWidth: 1,
        alignItems: 'center'
    },
    newView: {
        flexDirection: 'row',
        overflow: 'hidden',
        width: 320,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
    },
    visibilityBtn:
    {
        flexDirection: 'row',
        overflow: 'hidden',
        height: 20,
        width: 35
    },
    btnImage:
    {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    }
});