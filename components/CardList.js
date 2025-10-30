import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import CardItem from './CardItem';
import cards from '../data/cards.json';

const COLORS = ['#e74c3c', '#7f8c8d', '#222'];

export function CardList() {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.header}>Mes Cartes</Text>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {cards.map((item, idx) => (
          <View key={item.id} style={styles.cardWrapper}>
            <CardItem
              title={item.title}
              description={item.description}
              image={item.image}
              url={item.url}
              color={COLORS[idx % COLORS.length]}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#f0f3f9',
    paddingTop: 30,
    paddingHorizontal: 0,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2950a0',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 1.5,
    textShadowColor: '#dbeafe',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 7,
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingBottom: 32,
  },
  cardWrapper: {
    shadowColor: '#222',
    shadowOpacity: 0.13,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    borderRadius: 14,
    backgroundColor: 'transparent',
    marginBottom: 22,
  },
});
