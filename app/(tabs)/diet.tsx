import { StyleSheet } from 'react-native';

import DietScreenInfo from '@/components/DietScreenInfo';
import { Text, View } from '@/components/Themed';

export default function DietScreen() {
  return (
    <View style={styles.container}>
      <DietScreenInfo path="app/(tabs)/diet.tsx" />
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
