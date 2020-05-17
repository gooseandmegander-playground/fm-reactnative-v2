import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColorBox({ theme, hexCode }) {
  const themeColor = { backgroundColor: hexCode };
  const textColor = { color: setTextColor(hexCode) };
  return (
    <View style={[styles.box, themeColor]}>
      <Text style={[typography.boxText, textColor]}>
        {theme}: {hexCode}
      </Text>
    </View>
  );
}

function setTextColor(hexCode) {
  const isTextBlack = parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1;
  return isTextBlack ? 'black' : 'white';
}

const typography = StyleSheet.create({
  // heading: { fontWeight: 'bold', fontSize: 16, paddingVertical: 4 },
  boxText: { color: 'white', fontWeight: '500' },
});

const styles = StyleSheet.create({
  box: {
    borderRadius: 2,
    marginVertical: 6,
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2, // Android only
  },
});
