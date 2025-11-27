import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>À propos</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.subtitle}>Atlas Geo Medali Application</Text>
        <Text style={styles.description}>
          Learn more about countries and their achievements.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 40,
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
  },
  backButton: {
    padding: 4,
    marginRight: 16,
  },
  backIcon: {
    fontSize: 32,
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    color: '#333',
    paddingTop: 8,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#999',
  },
});
