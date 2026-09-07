import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SizesProvider, useReactNativeSizes } from 'use-sizes';

function SizesView() {
  const sizes = useReactNativeSizes();

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>use-sizes</Text>
      <Text style={styles.hint}>
        Rotate or resize the window to see updates
      </Text>
      <View style={styles.card}>
        <Text style={styles.code}>{JSON.stringify(sizes, null, 2)}</Text>
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <SizesProvider>
      <View style={styles.container}>
        <SizesView />
        <StatusBar style="auto" />
      </View>
    </SizesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  hint: {
    opacity: 0.6,
  },
  card: {
    width: '100%',
    maxWidth: 480,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(127, 127, 127, 0.12)',
  },
  code: {
    fontFamily: Platform.select({ ios: 'Menlo', default: 'monospace' }),
    fontSize: 13,
  },
});
