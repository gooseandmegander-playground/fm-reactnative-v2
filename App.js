import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import ColorBox from './components/ColorBox';

export default function App() {
  return (
    <SafeAreaView>
      <View style={layout.container}>
        <Text style={typography.heading}>
          Here are some boxes of different colors
        </Text>
        <ColorBox theme="cyan" hexCode={themes.cyan} />
        <ColorBox theme="blue" hexCode={themes.blue} />
        <ColorBox theme="magenta" hexCode={themes.magenta} />
        <ColorBox theme="orange" hexCode={themes.orange} />
      </View>
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
  // boxText: { color: 'white', fontWeight: '500' },
});

const themes = {
  cyan: '#2aa198',
  blue: '#268bd2',
  magenta: '#d33682',
  orange: '#cb4b16',
};
