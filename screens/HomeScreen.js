import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu App</Text>
      
      <Image
        source={require('../assets/react_native.jpg')}
        style={styles.logo}
      />
      
      <Text style={styles.description}>
        Este é um aplicativo de demonstração para mostrar como funciona a navegação entre telas
        usando React Navigation no React Native com Expo. Explore as diferentes seções do app
        usando os botões abaixo.
      </Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Ver Detalhes do App"
          onPress={() => navigation.navigate('Details')}
          color="#4169E1"
        />
        
        <View style={styles.buttonSpacer} />
        
        <Button
          title="Sobre o Desenvolvedor"
          onPress={() => navigation.navigate('About')}
          color="#4682B4"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#ddd',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    color: '#444',
  },
  buttonContainer: {
    width: '80%',
  },
  buttonSpacer: {
    height: 15,
  },
});