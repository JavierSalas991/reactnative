import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik, useField } from 'formik';
import StyledTextInput from '../StyledTextInput';

const initialValues = {
    email: "",
    password: ""
}

const FormikInputValue = ({ name, ...props }) => {

    const [field, meta, helpers] = useField(name)
    return (
        <StyledTextInput
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}
        ></StyledTextInput>
    )
}

const Login = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {({ handleSubmit }) => {
                return (
                    <View>
                        <FormikInputValue
                            placeholder='E-mail'
                            name='email'
                        ></FormikInputValue>
                        <FormikInputValue
                            placeholder='Password'
                            name='password'
                            secureTextEntry
                        ></FormikInputValue>
                        <Button onPress={handleSubmit} title="Iniciar sesion">
                        </Button>
                    </View>

                )
            }}
        </Formik>
    );
};

export default Login;