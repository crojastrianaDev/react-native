import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { TextInput } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <TextInput  style={styles.input} placeholder="Tu Nombre" />
      <TextInput  style={styles.input} placeholder="Tu Apellido" />
      <TextInput  style={styles.input} placeholder="Tu correo" />
      <TextInput  style={styles.input} placeholder="Contrasela" />
      <TextInput  style={styles.input} placeholder="Confirmar contraseña" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="Registrarme" color="#0C2C24" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    marginBottom: '50px',
    color: 'white',
  },
});
