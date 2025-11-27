import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { Country } from '../data/countriesData';

type CountryDetailRouteProp = RouteProp<{ CountryDetail: { country: Country } }, 'CountryDetail'>;

export default function CountryDetailPage() {
  const route = useRoute<CountryDetailRouteProp>();
  const navigation = useNavigation();
  const { country } = route.params;

  const formatPopulation = (pop: number) => {
    if (pop >= 1000000) {
      const millions = (pop / 1000000).toFixed(1);
      return `${millions} millions d'habitants`;
    }
    return `${pop.toLocaleString('fr-FR')} habitants`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{country.name}</Text>
      </View>
      <ScrollView>
        <View style={styles.flagContainer}>
          <Image 
            source={country.flag}
            style={styles.flag}
          />
        </View>
        
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.icon}>🏛</Text>
            <View style={styles.infoContent}>
              <Text style={styles.infoValue}>{country.capital}</Text>
              <Text style={styles.infoLabel}>Capitale</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.icon}>👥</Text>
            <View style={styles.infoContent}>
              <Text style={styles.infoValue}>{formatPopulation(country.population)}</Text>
              <Text style={styles.infoLabel}>Population</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.icon}>🗺</Text>
            <View style={styles.infoContent}>
              <Text style={styles.infoValue}>{country.area.toLocaleString('fr-FR')} km²</Text>
              <Text style={styles.infoLabel}>Superficie</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.icon}>🗣</Text>
            <View style={styles.infoContent}>
              <Text style={styles.infoValue}>{country.language}</Text>
              <Text style={styles.infoLabel}>Langue(s) officielle(s)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  flagContainer: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  flag: {
    width: '100%',
    height: 200,
  },
  infoCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
  },
  infoRow: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    marginRight: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  infoLabel: {
    fontSize: 14,
    color: '#999',
  },
});
