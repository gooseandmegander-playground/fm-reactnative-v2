import React from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';

import ColorBox from './components/ColorBox';

import { COLORS } from './constants';

export default function App() {
  return (
    <SafeAreaView>
      <FlatList
        style={layout.container}
        ListHeaderComponent={<Text style={typography.heading}>Solarize</Text>}
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox theme={item.colorName} hexCode={item.hexCode} />
        )}
      />
    </SafeAreaView>
  );
}

// View Component Styles
const layout = StyleSheet.create({
  container: { paddingHorizontal: 15, paddingVertical: 10 },
});

// Text Component Styles
const typography = StyleSheet.create({
  heading: { fontWeight: 'bold', fontSize: 16, paddingVertical: 4 },
  // boxText: {color: 'white', fontWeight: '500' },
});
