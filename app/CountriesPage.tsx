import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { countriesData } from '../data/countriesData';

export default function CountriesPage() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} 
          style={styles.menuButton}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Liste des Pays</Text>
      </View>
      <FlatList
        data={countriesData}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.countryItem}
            onPress={() => navigation.navigate('CountryDetail', { country: item })}
          >
            <View style={styles.flagContainer}>
              <Image source={item.flag} style={styles.flag} />
            </View>
            <Text style={styles.countryName}>{item.name}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
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
  menuButton: {
    padding: 4,
    marginRight: 16,
  },
  menuIcon: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    color: '#333',
  },
  countryItem: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffffffff',
    marginVertical: 1,
  },
  flagContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 16,
  },
  flag: {
    width: 50,
    height: 50,
  },
  countryName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    paddingTop: 14,
  },
  arrow: {
    fontSize: 24,
    color: '#999',
    paddingTop: 10,
  },
});
