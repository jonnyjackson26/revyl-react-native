import { StyleSheet } from 'react-native';

import ProfileScreenInfo from '@/components/ProfileScreenInfo';
import { View } from '@/components/Themed';

export default function ProfileScreen() {
  // This isLoggedIn state would typically come from your authentication system
  // For now, it's hardcoded to false to show the NotLoggedIn component
  const isLoggedIn = false;
  
  return (
    <View style={styles.container}>
      <ProfileScreenInfo 
        isLoggedIn={isLoggedIn}
        username="Demo User" 
      />
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
