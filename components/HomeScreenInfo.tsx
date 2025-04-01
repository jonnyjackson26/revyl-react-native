import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import * as Font from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogoAndDate from './LogoAndDate';

export default function HomeScreenInfo({ username = 'User' }: { username?: string }) {
  const [greeting, setGreeting] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'DMSans-Regular': require('../assets/fonts/static_dm_sans/DMSans-Regular.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error('Error loading fonts', error);
      }
    }
    
    loadFonts();
  }, []);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting('Good morning');
      else if (hour < 18) setGreeting('Good afternoon');
      else setGreeting('Good evening');
    };

    const updateDate = () => {
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      setCurrentDate(new Date().toLocaleDateString('en-US', options));
    };

    updateGreeting();
    updateDate();

    const interval = setInterval(() => {
      updateGreeting();
      updateDate();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LogoAndDate currentDate={new Date().toISOString()} />
      
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>
          {greeting}, {username}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
  },
  greetingContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});
