import React, { useEffect, useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from './Themed';

export default function HomeScreenInfo({ username = 'User' }: { username?: string }) {
  const [greeting, setGreeting] = useState('');
  const [currentDate, setCurrentDate] = useState('');

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

    // Update greeting and date every minute
    const interval = setInterval(() => {
      updateGreeting();
      updateDate();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/revyl_favicon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>
          {greeting}, {username}
        </Text>
        <Text style={styles.date}>{currentDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
  },
  greetingContainer: {
    alignItems: 'center',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  date: {
    fontSize: 18,
    opacity: 0.8,
    textAlign: 'center',
  },
});
