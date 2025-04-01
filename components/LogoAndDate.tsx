import React from 'react';
import { StyleSheet, View, Text as RNText } from 'react-native';
import { Text } from './Themed';
import { SvgXml } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const revylLogoMarkup = `<svg width="973" height="264" viewBox="0 0 973 264" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M933.279 205.333V0H972.879V205.333H933.279Z" fill="#333333"/>
<path d="M787.149 264L820.295 188.907H812.082L752.535 59.8401H795.655L837.602 154.293H838.775L876.322 59.8401H918.562L829.095 264H787.149Z" fill="#333333"/>
<path d="M643.063 205.333L596.129 59.8401H637.783L672.103 179.227H673.569L708.183 59.8401H749.543L702.609 205.333H643.063Z" fill="#333333"/>
<path d="M518.699 208.853C503.836 208.853 490.636 205.724 479.099 199.467C467.756 193.209 458.859 184.409 452.405 173.067C445.952 161.724 442.725 148.72 442.725 134.053C442.725 118.8 445.854 105.404 452.112 93.8667C458.565 82.1333 467.463 72.9422 478.805 66.2933C490.343 59.6444 503.641 56.32 518.699 56.32C533.365 56.32 546.174 59.4489 557.125 65.7067C568.076 71.9645 576.681 80.5689 582.939 91.52C589.196 102.276 592.325 114.498 592.325 128.187C592.325 130.142 592.228 132.391 592.032 134.933C592.032 137.28 591.934 139.724 591.739 142.267H470.885V117.92H552.139C551.552 108.729 548.13 101.396 541.872 95.92C535.81 90.4444 528.183 87.7067 518.992 87.7067C512.148 87.7067 505.89 89.2711 500.219 92.4C494.548 95.3333 490.05 99.9289 486.725 106.187C483.401 112.249 481.739 119.973 481.739 129.36V137.867C481.739 145.884 483.303 152.827 486.432 158.693C489.561 164.364 493.863 168.764 499.339 171.893C505.01 175.022 511.365 176.587 518.405 176.587C525.641 176.587 531.703 175.022 536.592 171.893C541.481 168.569 545.196 164.364 547.739 159.28H587.925C585.188 168.471 580.592 176.88 574.139 184.507C567.685 191.938 559.765 197.902 550.379 202.4C540.992 206.702 530.432 208.853 518.699 208.853Z" fill="#333333"/>
<path d="M344 205.333V59.84H377.733L381.253 91.8133H382.427C386.729 81.4489 391.422 73.8222 396.507 68.9333C401.591 63.8489 407.36 60.5245 413.813 58.96C420.462 57.2 427.893 56.32 436.107 56.32V98.2667H425.253C418.604 98.2667 412.64 99.0489 407.36 100.613C402.276 101.982 397.973 104.329 394.453 107.653C390.933 110.782 388.196 114.987 386.24 120.267C384.48 125.547 383.6 131.902 383.6 139.333V205.333H344Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M132 0C88.3774 0 49.6589 21.2831 25.6192 53.9679C21.9972 58.5474 18.8257 63.4999 16.1657 68.7671C5.86656 87.5563 0 109.109 0 132C0 204.789 59.2112 264 132 264C204.789 264 264 204.789 264 132C264 59.2112 204.789 0 132 0ZM117.419 159.479C98.3717 159.479 82.7827 143.767 82.7827 124.355C82.7827 104.943 98.3717 89.2302 117.419 89.2302C136.466 89.2302 152.055 104.943 152.055 124.355C152.055 143.767 136.466 159.479 117.419 159.479ZM117.419 69.7596C87.5437 69.7596 63.3121 94.2827 63.3121 124.355C63.3121 147.689 77.9015 167.682 98.3964 175.47C96.5988 175.619 94.781 175.695 92.9455 175.695C56.223 175.695 26.258 145.442 26.258 108.166C26.258 97.2947 28.8248 87.0303 33.3506 77.9216C35.6976 73.6577 38.3245 69.5616 41.1951 65.644C53.4503 50.3815 72.1007 40.6367 92.9455 40.6367C122.056 40.6367 146.917 59.6447 155.976 86.0898C146.164 76.0242 132.515 69.7596 117.419 69.7596ZM132 244.529C79.0362 244.529 34.5169 207.732 22.6221 158.364C38.231 180.603 63.917 195.168 92.9455 195.168C140.498 195.168 179.106 156.106 179.106 108.169C179.106 65.0192 147.823 29.0601 106.894 22.3077C114.966 20.4521 123.367 19.4679 131.997 19.4679C194.042 19.4679 244.527 69.9529 244.527 131.997C244.527 194.042 194.044 244.529 132 244.529Z" fill="#333333"/>
</svg>`;

interface LogoAndDateProps {
  currentDate: string;
}

// Helper function to get the correct ordinal suffix for a day
function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

const GradientText = ({ style, children }: { style?: any, children: React.ReactNode }) => {
  return (
    <MaskedView
      maskElement={
        <RNText style={[style, { backgroundColor: 'transparent' }]}>
          {children}
        </RNText>
      }
    >
      <LinearGradient
        colors={['#e75a87', '#b654c5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <RNText style={[style, { opacity: 0 }]}>
          {children}
        </RNText>
      </LinearGradient>
    </MaskedView>
  );
};

export default function LogoAndDate({ currentDate }: LogoAndDateProps) {
  const formatDateForHeader = (dateString: string) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    
    const monthName = date.toLocaleDateString('en-US', { month: 'long' }).toLowerCase();
    const day = date.getDate();
    const year = date.getFullYear();
    const suffix = getDaySuffix(day);
    
    return (
      <View style={styles.dateTextContainer}>
        <GradientText style={styles.weekday}>{weekday}</GradientText>
        <GradientText style={styles.fullDate}>{monthName} {day}{suffix}, {year}</GradientText>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <SvgXml
          xml={revylLogoMarkup}
          width={140}
          height={40}
        />
      </View>
      
      <View style={styles.dateContainer}>
        {formatDateForHeader(currentDate)}
      </View>
      
      <View style={styles.settingsContainer}>
        <Ionicons name="settings-outline" size={32} color="#333" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  dateContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  dateTextContainer: {
    alignItems: 'flex-end',
  },
  settingsContainer: {
    marginLeft: 20,
    marginRight: 10,
  },
  weekday: {
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    textAlign: 'right',
  },
  fullDate: {
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    textAlign: 'right',
  }
}); 