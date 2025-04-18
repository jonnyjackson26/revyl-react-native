import { StyleSheet } from 'react-native';

import ExerciseScreenInfo from '@/components/ExerciseScreenInfo';
import { Text, View } from '@/components/Themed';

export default function ExerciseScreen() {
  return (
    <View style={styles.container}>
      <ExerciseScreenInfo path="app/(tabs)/exercise.tsx" />
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
