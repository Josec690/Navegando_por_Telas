import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Desenvolvedor</Text>
      
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/foto.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>José Silva</Text>
        <Text style={styles.role}>Desenvolvedor Mobile</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Olá! Sou um desenvolvedor apaixonado por tecnologias móveis, especialmente React Native.
          Trabalho criando aplicativos intuitivos e funcionais para diversas plataformas.
        </Text>
        
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Contato:</Text>
          <Text style={styles.contactText}>Email: jose.silva@email.com</Text>
          <Text style={styles.contactText}>Telefone: (11) 98765-4321</Text>
          <Text style={styles.contactText}>LinkedIn: linkedin.com/in/josesilva</Text>
          <Text style={styles.contactText}>GitHub: github.com/josesilva</Text>
        </View>
      </View>
      
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
        color="#4682B4"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#444',
  },
  contactContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  contactText: {
    fontSize: 14,
    lineHeight: 24,
    color: '#555',
  },
});