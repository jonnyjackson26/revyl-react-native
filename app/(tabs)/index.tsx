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
    <View style={styles.container}>
      {!expandedWidget && (
        <SafeAreaView style={styles.safeArea}>
          <LogoAndDate currentDate={new Date().toISOString()} />
          <View style={styles.widgetsContainer}>
            <LiveWorkoutWidget
              expanded={false}
              onExpand={handleLiveWidgetExpand}
              onCollapse={() => {}}
            />
            <PlannedWorkoutWidget
              expanded={false}
              onExpand={() => setExpandedWidget('planned')}
              onCollapse={() => {}}
            />
          </View>
        </SafeAreaView>
      )}
      
      {expandedWidget === 'live' && (
        <LiveWorkoutWidget
          expanded={true}
          onExpand={() => {}}
          onCollapse={() => setExpandedWidget(null)}
        />
      )}
      
      {expandedWidget === 'planned' && (
        <PlannedWorkoutWidget
          expanded={true}
          onExpand={() => {}}
          onCollapse={() => setExpandedWidget(null)}
        />
      )}
    </View>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
  },
  widgetsContainer: {
    flex: 1,
    padding: 10,
  },
});

