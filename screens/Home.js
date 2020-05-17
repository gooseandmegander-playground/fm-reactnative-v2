import React from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import PalettePreview from '../components/PalettePreview';
import { COLOR_PALETTES, PREVIEW_COUNT } from '../constants';

export default function Home({ navigation }) {
  return (
    <FlatList
      style={styles.container}
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.push('ColorPalette', {
              paletteName: item.paletteName,
              theme: item.colors,
            })
          }
        >
          <Text style={styles.heading}>{item.paletteName}</Text>
          <PalettePreview theme={item.colors.slice(0, PREVIEW_COUNT)} />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 6,
  },
});
