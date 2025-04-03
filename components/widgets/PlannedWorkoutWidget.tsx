import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import { WidgetBase } from './WidgetBase';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const WIDGET_HEIGHT = SCREEN_WIDTH * 0.5;
const HORIZONTAL_PADDING = 20; // Consistent padding

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
  // Content when widget is collapsed
  const collapsedContent = (
    <View style={styles.collapsedContent}>
      <Text style={styles.title}>Planned Workout</Text>
      <Text style={styles.subtitle}>Upcoming Sessions</Text>
    </View>
  );
  
  // Content when widget is expanded
  const expandedContent = (
    <View style={styles.expandedContent}>
      <Text style={styles.expandedText}>Planned Workout Schedule</Text>
      <Text style={styles.expandedSubtext}>
        Here you can view and manage your upcoming workout schedule.
        Add new workouts, edit existing ones, or track your progress.
      </Text>
    </View>
  );

  // In collapsed state, wrap with a centering View
  if (!expanded) {
    return (
      <View style={styles.wrapper}>
        <WidgetBase
          collapsedContent={collapsedContent}
          expandedContent={expandedContent}
          expanded={false}
          onExpand={onExpand}
          onCollapse={onCollapse}
          backgroundColor="#FF0000" // Red
          title="Planned Workout"
          subtitle="Upcoming Sessions"
          style={styles.widget}
        />
      </View>
    );
  }

  // In expanded state, don't use the wrapper
  return (
    <WidgetBase
      collapsedContent={collapsedContent}
      expandedContent={expandedContent}
      expanded={true}
      onExpand={onExpand}
      onCollapse={onCollapse}
      backgroundColor="#FF0000" // Red
      title="Planned Workout"
      subtitle="Upcoming Sessions"
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  widget: {
    width: SCREEN_WIDTH - (HORIZONTAL_PADDING * 2),
    height: WIDGET_HEIGHT,
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