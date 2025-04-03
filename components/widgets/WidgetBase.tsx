import React from 'react';
import { StyleSheet, View, Dimensions, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { 
  useAnimatedStyle, 
  withSpring,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { Text } from '../Themed';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface WidgetBaseProps {
  children: React.ReactNode;
  expanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  style?: any;
}

export const WidgetBase: React.FC<WidgetBaseProps> = ({
  children,
  expanded,
  onExpand,
  onCollapse,
  style
}) => {
  const scale = useSharedValue(1);
  const borderRadius = useSharedValue(20);
  const position = useSharedValue({ x: 0, y: 0 });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { translateX: position.value.x },
        { translateY: position.value.y }
      ],
      borderRadius: borderRadius.value,
    };
  });

  React.useEffect(() => {
    if (expanded) {
      scale.value = withSpring(1);
      borderRadius.value = withTiming(0);
      position.value = withSpring({ x: 0, y: 0 });
    } else {
      scale.value = withSpring(1);
      borderRadius.value = withTiming(20);
      position.value = withSpring({ x: 0, y: 0 });
    }
  }, [expanded]);

  const content = (
    <Animated.View style={[styles.container, animatedStyle, style]}>
      <Pressable 
        style={styles.content}
        onPress={expanded ? undefined : onExpand}
      >
        {children}
      </Pressable>
      {expanded && (
        <Pressable 
          style={styles.closeButton}
          onPress={onCollapse}
        >
          <Text style={styles.closeButtonText}>×</Text>
        </Pressable>
      )}
    </Animated.View>
  );

  return expanded ? (
    <View style={styles.expandedContainer}>
      <SafeAreaView style={styles.safeArea}>
        {content}
      </SafeAreaView>
    </View>
  ) : content;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  expandedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    zIndex: 1000,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
}); 