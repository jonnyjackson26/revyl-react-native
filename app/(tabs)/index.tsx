import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import { WidgetProvider } from '@/components/context/WidgetContext';
import { LiveWorkoutWidget } from '@/components/widgets/LiveWorkoutWidget';
import { PlannedWorkoutWidget } from '@/components/widgets/PlannedWorkoutWidget';
import { useWidgetContext } from '@/components/context/WidgetContext';
import LogoAndDate from '@/components/LogoAndDate';

function HomeScreenContent() {
  const { expandedWidget, setExpandedWidget } = useWidgetContext();
  const [sound, setSound] = React.useState<Audio.Sound>();

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playGongSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('@/assets/sounds/gong_sound.mp3')
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const handleLiveWidgetExpand = () => {
    setExpandedWidget('live');
    playGongSound();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {!expandedWidget && <LogoAndDate currentDate={new Date().toISOString()} />}
      <View style={styles.container}>
        <LiveWorkoutWidget
          expanded={expandedWidget === 'live'}
          onExpand={handleLiveWidgetExpand}
          onCollapse={() => setExpandedWidget(null)}
        />
        <PlannedWorkoutWidget
          expanded={expandedWidget === 'planned'}
          onExpand={() => setExpandedWidget('planned')}
          onCollapse={() => setExpandedWidget(null)}
        />
      </View>
    </SafeAreaView>
  );
}

export default function HomeScreen() {
  return (
    <WidgetProvider>
      <HomeScreenContent />
    </WidgetProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 10,
  },
});
