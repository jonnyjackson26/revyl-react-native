import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import { WidgetBase } from './WidgetBase';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const WIDGET_SIZE = SCREEN_WIDTH * 0.5;

interface LiveWorkoutWidgetProps {
  expanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const LiveWorkoutWidget: React.FC<LiveWorkoutWidgetProps> = ({
  expanded,
  onExpand,
  onCollapse,
}) => {
  return (
    <WidgetBase
      expanded={expanded}
      onExpand={onExpand}
      onCollapse={onCollapse}
      style={[
        styles.container,
        expanded && styles.expanded
      ]}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Live Workout</Text>
        <Text style={styles.subtitle}>Current Session</Text>
        {/* Add your live workout content here */}
      </View>
    </WidgetBase>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDGET_SIZE,
    height: WIDGET_SIZE,
    margin: 10,
    backgroundColor: '#FFA500', // Orange color
  },
  expanded: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000,
    backgroundColor: '#FFA500', // Orange color
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.9,
    color: 'white',
  },
}); 