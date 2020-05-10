import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.desc}>Here are some boxes of different colours</Text>
      <View style={styles.container}>
        <Text style={[styles.allText, styles.textCyan]}>Cyan: #2aa198</Text>
        <Text style={[styles.allText, styles.textBlue]}>Blue: #268bd2</Text>
        <Text style={[styles.allText, styles.textMagenta]}>Magenta: #d33682</Text>
        <Text style={[styles.allText, styles.textOrange]}>Orange: #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // borderColor: 'yellow',
    // borderWidth: 2,
    marginHorizontal: 20,
  },
  desc: {
    fontWeight: 'bold',
  },
  container: {
    // borderColor: 'pink',
    // borderWidth: 2,
    justifyContent: 'space-between',
  },
  allText: {
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    marginVertical: 5,
  },
  textCyan: { backgroundColor: '#2aa198' },
  textBlue: { backgroundColor: '#268bd2' },
  textMagenta: { backgroundColor: '#d33682' },
  textOrange: { backgroundColor: '#cb4b16' },
});
