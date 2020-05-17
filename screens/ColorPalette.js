import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ColorBox from '../components/ColorBox';

// eslint-disable-next-line prettier/prettier
export default function ColorPalette({ route: { params: { theme } } }) {
  return (
    <FlatList
      style={styles.container}
      data={theme}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox theme={item.colorName} hexCode={item.hexCode} />
      )}
    />
  );
}

// View Component Styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 4,
  },
});