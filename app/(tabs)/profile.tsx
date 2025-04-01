import { StyleSheet } from 'react-native';

import ProfileScreenInfo from '@/components/ProfileScreenInfo';
import { Text, View } from '@/components/Themed';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileScreenInfo path="app/(tabs)/profile.tsx" />
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
