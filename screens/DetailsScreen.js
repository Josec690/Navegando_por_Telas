import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Sobre o App</Text>
        
        <Image
          source={require('../assets/binarios.jpeg')}
          style={styles.banner}
        />
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>O que é este aplicativo?</Text>
          <Text style={styles.sectionText}>
            Este é um aplicativo de demonstração que mostra como implementar navegação entre telas
            usando o React Navigation no React Native com Expo. É um exemplo prático para
            desenvolvedores que estão aprendendo a criar interfaces móveis multiplataforma.
          </Text>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Principais Recursos</Text>
          <View style={styles.featureItem}>
            <Text style={styles.featureBullet}>•</Text>
            <Text style={styles.featureText}>Navegação entre múltiplas telas</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureBullet}>•</Text>
            <Text style={styles.featureText}>Uso do Stack Navigator para transições suaves</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureBullet}>•</Text>
            <Text style={styles.featureText}>Layout responsivo com estilos adaptáveis</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureBullet}>•</Text>
            <Text style={styles.featureText}>Interface de usuário limpa e intuitiva</Text>
          </View>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Tecnologias Utilizadas</Text>
          <Text style={styles.sectionText}>
            • React Native{'\n'}
            • Expo CLI{'\n'}
            • React Navigation{'\n'}
            • Native Stack Navigator
          </Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Voltar para Home"
            onPress={() => navigation.goBack()}
            color="#4169E1"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#ddd',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  featureBullet: {
    fontSize: 18,
    marginRight: 8,
    color: '#4169E1',
  },
  featureText: {
    fontSize: 16,
    color: '#444',
    flex: 1,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 20,
  },
});