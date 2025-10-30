import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function CardItem({ title, description, image, url, color }) {
  const handlePress = () => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <View style={[styles.card, { borderLeftColor: color || '#fff', borderLeftWidth: 7, backgroundColor: '#fff' }]}> 
      <Image source={{ uri: image }} style={styles.cover} />
      <View style={styles.body}>
        <Text style={[styles.title, { color: color || '#222' }]}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
        {url && (
          <TouchableOpacity style={[styles.button, { backgroundColor: color || '#3566f8' }]} onPress={handlePress}>
            <Text style={styles.buttonText}>En savoir plus</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3, 
    borderLeftWidth: 7,
    borderLeftColor: '#fff',
  },
  cover: { width: '100%', height: 150 },
  body: { padding: 12 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  desc: { color: '#555', marginBottom: 10 },
  button: {
    marginTop: 6,
    padding: 10,
    backgroundColor: '#3566f8',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
