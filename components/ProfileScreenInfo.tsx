import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import NotLoggedInPrompt from './NotLoggedInPrompt';
import Colors from '@/constants/Colors';

interface ProfileScreenInfoProps {
  isLoggedIn?: boolean;
  username?: string;
}

export default function ProfileScreenInfo({ 
  isLoggedIn = false, 
  username = 'User' 
}: ProfileScreenInfoProps) {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  // These handlers will be replaced with actual authentication logic later
  const handleLogin = () => {
    console.log('Login pressed');
    // TODO: Implement authentication
    setIsLoggingIn(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoggingIn(false);
    }, 2000);
  };

  const handleSignup = () => {
    console.log('Signup pressed');
    // TODO: Implement account creation
    setIsLoggingIn(true);
    // Simulate signup process
    setTimeout(() => {
      setIsLoggingIn(false);
    }, 2000);
  };

  // If user is not logged in, show the login prompt
  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <NotLoggedInPrompt
          onLogin={handleLogin}
          onSignup={handleSignup}
        />
      </View>
    );
  }

  // Otherwise, show the user profile (to be implemented)
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text
          style={styles.welcomeText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Welcome, {username}!
        </Text>
        
        <Text
          style={styles.profileText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Your profile information will appear here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});
