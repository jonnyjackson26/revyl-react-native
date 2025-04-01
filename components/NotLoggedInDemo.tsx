import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { View } from './Themed';
import NotLoggedInPrompt from './NotLoggedInPrompt';
import LogoAndDate from './LogoAndDate';

export default function NotLoggedInDemo() {
  const handleLogin = () => {
    // Implement login logic here
    console.log('Login pressed');
  };

  const handleSignup = () => {
    // Implement signup logic here
    console.log('Signup pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LogoAndDate currentDate={new Date().toISOString()} />
      
      <View style={styles.contentContainer}>
        <NotLoggedInPrompt 
          onLogin={handleLogin}
          onSignup={handleSignup}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
}); 