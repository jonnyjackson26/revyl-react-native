import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
  interpolate,
  runOnJS
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const ANIMATION_DURATION = 200; // ms

interface WidgetBaseProps {
  collapsedContent: React.ReactNode;
  expandedContent: React.ReactNode;
  expanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  backgroundColor: string;
  title?: string;
  subtitle?: string;
  style?: any;
}

export const WidgetBase: React.FC<WidgetBaseProps> = ({
  collapsedContent,
  expandedContent,
  expanded,
  onExpand,
  onCollapse,
  backgroundColor,
  title,
  subtitle,
  style
}) => {
  // Animation values
  const progress = useSharedValue(0);
  const scale = useSharedValue(1);
  
  // Update animation values when expanded state changes
  useEffect(() => {
    if (expanded) {
      // Pop and expand effect
      scale.value = withSpring(1.05, { 
        damping: 12,
        stiffness: 120,
        mass: 0.8 
      });
      progress.value = withTiming(1, { 
        duration: ANIMATION_DURATION,
        easing: Easing.bezier(0.2, 0.65, 0.4, 0.95) 
      });
    } else {
      // Shrink back effect
      scale.value = withSpring(1, { damping: 15 });
      progress.value = withTiming(0, { 
        duration: ANIMATION_DURATION * 0.8,
        easing: Easing.bezier(0.4, 0, 0.2, 1)
      });
    }
  }, [expanded]);
  
  // Animated styles for background
  const backgroundStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor,
      zIndex: progress.value > 0 ? 999 : -1,
    };
  });
  
  // Animated styles for widget container
  const containerStyle = useAnimatedStyle(() => {
    // For collapsed widget
    if (!expanded) {
      return {
        ...style,
        transform: [{ scale: scale.value }],
        borderRadius: 20,
        backgroundColor,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden',
      };
    }
    
    // For expanded widget - bubble-like expansion
    return {
      position: 'absolute',
      width: interpolate(
        progress.value,
        [0, 1],
        [style?.width || SCREEN_WIDTH * 0.5, SCREEN_WIDTH]
      ),
      height: interpolate(
        progress.value,
        [0, 1],
        [style?.height || SCREEN_WIDTH * 0.5, SCREEN_HEIGHT]
      ),
      top: interpolate(
        progress.value,
        [0, 1],
        [style?.top || SCREEN_HEIGHT * 0.3, 0]
      ),
      left: interpolate(
        progress.value,
        [0, 1],
        [style?.left || SCREEN_WIDTH * 0.25, 0]
      ),
      borderRadius: interpolate(
        progress.value,
        [0, 1],
        [20, 0]
      ),
      transform: [
        { scale: interpolate(progress.value, [0, 0.3, 1], [1, 1.08, 1]) }
      ],
      backgroundColor,
      overflow: 'hidden',
      zIndex: 1000,
    };
  });
  
  // Animated styles for content
  const contentStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progress.value, 
        expanded ? [0.5, 1] : [0, 0.5], 
        expanded ? [0, 1] : [1, 0]
      ),
      flex: 1,
    };
  });
  
  // Animated styles for the close button
  const closeButtonStyle = useAnimatedStyle(() => {
    if (!expanded) return { opacity: 0 };
    
    return {
      opacity: interpolate(progress.value, [0.8, 1], [0, 1]),
      transform: [
        { scale: interpolate(progress.value, [0.8, 1], [0.5, 1]) }
      ],
      position: 'absolute',
      top: 10,
      right: 10,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1001,
    };
  });
  
  // Render both collapsed and expanded views with animations
  return (
    <>
      {/* Full screen background for expanded state */}
      <Animated.View style={backgroundStyle} />
      
      {/* Widget container with animation */}
      <Animated.View style={containerStyle}>
        {!expanded ? (
          <Pressable 
            style={styles.pressable}
            onPress={onExpand}
          >
            <Animated.View style={contentStyle}>
              {collapsedContent}
            </Animated.View>
          </Pressable>
        ) : (
          <SafeAreaView style={styles.safeAreaContent} edges={['top', 'left', 'right']}>
            <View style={styles.expandedContent}>
              {/* Header */}
              {(title || subtitle) && (
                <View style={styles.headerContainer}>
                  {title && <Text style={styles.title}>{title}</Text>}
                  {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
              )}
              
              {/* Main Content */}
              <View style={styles.contentContainer}>
                <Animated.View style={contentStyle}>
                  {expandedContent}
                </Animated.View>
              </View>
            </View>
          </SafeAreaView>
        )}
      </Animated.View>
      
      {/* Animated close button */}
      {expanded && (
        <SafeAreaView style={styles.closeButtonContainer} edges={['top', 'right']}>
          <Animated.View style={closeButtonStyle}>
            <Pressable 
              style={styles.closeButtonInner}
              onPress={onCollapse}
            >
              <Text style={styles.closeButtonText}>×</Text>
            </Pressable>
          </Animated.View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  safeAreaContent: {
    flex: 1,
  },
  expandedContent: {
    flex: 1,
    position: 'relative',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    opacity: 0.9,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1002,
  },
  closeButtonInner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
}); 