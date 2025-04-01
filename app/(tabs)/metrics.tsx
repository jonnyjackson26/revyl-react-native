import { StyleSheet } from 'react-native';

import MetricsScreenInfo from '@/components/MetricsScreenInfo';
import { Text, View } from '@/components/Themed';

export default function MetricScreen() {
  return (
    <View style={styles.container}>
      <MetricsScreenInfo path="app/(tabs)/metrics.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
