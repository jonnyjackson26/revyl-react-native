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
  // Content when widget is collapsed
  const collapsedContent = (
    <View style={styles.collapsedContent}>
      <Text style={styles.title}>Live Workout</Text>
      <Text style={styles.subtitle}>Current Session</Text>
    </View>
  );
  
  // Content when widget is expanded
  const expandedContent = (
    <View style={styles.expandedContent}>
      <Text style={styles.expandedText}>Live Workout Expanded View</Text>
      <Text style={styles.expandedSubtext}>
        This is the detailed view of your live workout session.
        You can add charts, metrics, and interactive elements here.
      </Text>
    </View>
  );
  
  return (
    <WidgetBase
      collapsedContent={collapsedContent}
      expandedContent={expandedContent}
      expanded={expanded}
      onExpand={onExpand}
      onCollapse={onCollapse}
      backgroundColor="#FFA500" // Orange
      title="Live Workout"
      subtitle="Current Session"
      style={styles.widget}
    />
  );
};

const styles = StyleSheet.create({
  widget: {
    width: WIDGET_SIZE,
    height: WIDGET_SIZE,
    margin: 10,
  },
  collapsedContent: {
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
  expandedContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandedText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  expandedSubtext: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
    paddingHorizontal: 20,
  }
}); 