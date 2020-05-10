import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={layout.container}>
        <Text style={typography.heading}>
          Here are some boxes of different colors
        </Text>
        <View style={[styles.box, themes.cyan]}>
          <Text style={typography.boxText}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.box, themes.blue]}>
          <Text style={typography.boxText}>Blue: #268bd2</Text>
        </View>
        <View style={[styles.box, themes.magenta]}>
          <Text style={typography.boxText}>Magenta: #d33682</Text>
        </View>
        <View style={[styles.box, themes.orange]}>
          <Text style={typography.boxText}>Orange: #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const layout = StyleSheet.create({
  container: { paddingHorizontal: 15, paddingVertical: 10 },
});

const typography = StyleSheet.create({
  heading: { fontWeight: 'bold', fontSize: 16, paddingVertical: 4 },
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

const themes = StyleSheet.create({
  cyan: { backgroundColor: '#2aa198' },
  blue: { backgroundColor: '#268bd2' },
  magenta: { backgroundColor: '#d33682' },
  orange: { backgroundColor: '#cb4b16' },
});
