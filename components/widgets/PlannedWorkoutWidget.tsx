import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import { WidgetBase } from './WidgetBase';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const WIDGET_HEIGHT = SCREEN_WIDTH * 0.5;

interface PlannedWorkoutWidgetProps {
  expanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const PlannedWorkoutWidget: React.FC<PlannedWorkoutWidgetProps> = ({
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
        <Text style={styles.title}>Planned Workout</Text>
        <Text style={styles.subtitle}>Upcoming Sessions</Text>
        {/* Add your planned workout content here */}
      </View>
    </WidgetBase>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 20,
    height: WIDGET_HEIGHT,
    margin: 10,
    backgroundColor: '#FF0000', // Red color
  },
  expanded: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000,
    backgroundColor: '#FF0000', // Red color
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