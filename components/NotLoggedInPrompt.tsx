import React from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from './Themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

interface NotLoggedInPromptProps {
  onLogin?: () => void;
  onSignup?: () => void;
}

export default function NotLoggedInPrompt({ onLogin, onSignup }: NotLoggedInPromptProps) {
  const handleLogin = () => {
    if (onLogin) {
      onLogin();
    } else {
      // Default behavior if no custom handler is provided
      Alert.alert('Login', 'Login functionality needs to be implemented');
    }
  };

  const handleSignup = () => {
    if (onSignup) {
      onSignup();
    } else {
      // Default behavior if no custom handler is provided
      Alert.alert('Sign Up', 'Sign up functionality needs to be implemented');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="lock-closed" size={60} color="#ccc" />
      </View>
      
      <Text style={styles.title}>You're not logged in yet</Text>
      
      <Text style={styles.description}>
        Please create an account or log in for full app functionality and to keep your data safe.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignup} style={styles.buttonWrapper}>
          <LinearGradient
            colors={['#e75a87', '#b654c5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={[styles.buttonWrapper, styles.loginButton]}>
          <View style={styles.outlinedButton}>
            <Text style={styles.outlinedButtonText}>Log In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 15,
  },
  buttonWrapper: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginButton: {
    borderWidth: 0,
  },
  outlinedButton: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#b654c5',
    borderRadius: 8,
  },
  outlinedButtonText: {
    color: '#b654c5',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 