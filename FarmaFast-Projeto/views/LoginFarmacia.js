import React, { useState } from 'react';
import { Platform, View, Text, StyleSheet, Alert, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from "react-native-masked-text";

export default function LoginFarmacia({ navigation }) {

    const [display, setDisplay] = useState('none');
    const [cnpj, setCnpj] = useState('');

    <View>
        <Text style={styles.login__msg(display)}>CNPJ ou senha inválidos!</Text>
    </View>


    return (

        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[styles.container, styles.darkbg]}>
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image
                        source={require('../assets/img/logoCircle.png')}
                        style={{ width: '60%' }}
                        resizeMode='contain' />
                </View>


                <Animatable.View animation="fadeInUp" styles={styles.containerForm}>

                    <Text style={styles.title}>CNPJ</Text>
                    <TextInputMask style={styles.input}
                        type={'cnpj'}
                        placeholder="00.000.000/0000-00"
                        keyboardType='numeric'
                        value={cnpj}
                        onChangeText={text => setCnpj(text)}
                    />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Digite sua senha" />


                    <TouchableOpacity style={styles.button} onPress={() => setDisplay('flex')}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('RegisterPharma')}>
                        <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonForgot} onPress={() => navigation.navigate('RedefinedPasswordPharma')}>
                        <Text style={styles.forgotText}>Redefinir senha</Text>
                    </TouchableOpacity>


                </Animatable.View>

            </View>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#83c4ec'
    },
    containerLogo: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '10%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: '10%',
    },
    loginMsg: (text = 'none') => ({
        fontWeight: 'bold',
        fontSize: 22,
        color: '#e0e1e6',
        marginTop: 10,
        marginBottom: 15,
        display: 'text'
    }),
    input: {
        marginTop: 5,
        marginLeft: '10%',
        padding: 15,
        width: 300,
        backgroundColor: '#e0e1e6',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    button: {
        backgroundColor: '#4eabe4',
        width: '80%',
        alignItems: 'center',
        borderRadius: 4,
        marginLeft: '10%',
        paddingVertical: 10,
        justifyContent: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#e0e1e6',
        fontSize: 17,
        fontWeight: 'bold'
    },
    buttonForgot: {
        marginTop: 24,
        alignSelf: 'center',
    },
    forgotText: {
        color: '#e0e1e6',
        fontSize: 15,
        fontWeight: 'bold'
    },
    login__msg: (text = 'none') => ({
        fontWeight: "bold",
        fontSize: 22,
        color: "red",
        marginBottom: 15,
        display: text
    }
    ),
}

)