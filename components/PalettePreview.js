import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

export default function PalettePreview({ theme }) {
  return (
    <FlatList
      style={styles.container}
      data={theme}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <View style={[styles.box, { backgroundColor: item.hexCode }]} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  box: {
    height: 34,
    width: 34,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2, // Android only
  },
});
