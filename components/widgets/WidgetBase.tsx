import React from 'react';
import { StyleSheet, View, Dimensions, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

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
  // For collapsed widget
  if (!expanded) {
    return (
      <Pressable 
        style={[styles.collapsedContainer, { backgroundColor }, style]}
        onPress={onExpand}
      >
        {collapsedContent}
      </Pressable>
    );
  }
  
  // For expanded widget
  return (
    <>
      {/* Full screen background color */}
      <View style={[StyleSheet.absoluteFillObject, { backgroundColor }]} />
      
      {/* Content container */}
      <View style={styles.expandedOuterContainer}>
        <SafeAreaView style={styles.safeAreaContent}>
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
              {expandedContent}
            </View>
            
            {/* Close Button */}
            <Pressable 
              style={styles.closeButton}
              onPress={onCollapse}
            >
              <Text style={styles.closeButtonText}>×</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  collapsedContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  expandedOuterContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1000,
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
    zIndex: 1001,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
}); 