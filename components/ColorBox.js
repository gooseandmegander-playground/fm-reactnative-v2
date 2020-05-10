import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColorBox({ theme, hexCode }) {
  const themeColor = { backgroundColor: hexCode };
  return (
    <View style={[styles.box, themeColor]}>
      <Text style={typography.boxText}>
        {theme}: {hexCode}
      </Text>
    </View>
  );
}

const typography = StyleSheet.create({
  // heading: { fontWeight: 'bold', fontSize: 16, paddingVertical: 4 },
  boxText: { color: 'white', fontWeight: '500' },
});

const styles = StyleSheet.create({
  box: {
    borderRadius: 2,
    marginVertical: 6,
    paddingVertical: 8,
    alignItems: 'center',
  },
});
