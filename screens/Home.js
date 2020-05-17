import React, { useState, useCallback, useEffect } from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  StyleSheet,
} from 'react-native';

import PalettePreview from '../components/PalettePreview';
import { PREVIEW_COUNT } from '../constants';

export default function Home({ navigation }) {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (response.ok) {
      const palettes = await response.json();
      setColorPalettes(palettes);
    }
  }, []);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [fetchColorPalettes]);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  return (
    <FlatList
      style={styles.container}
      data={colorPalettes}
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
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
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
