import React from 'react';
import { Animated } from 'react-native';

import { indicatorStyles as styles } from './styles';

const AnimatedDot = ({ i, scrollAnimatedValue, numberOfCards, scrollWidth, activeColor, inActiveColor }) => {
  const range = {};
  if (i === 0) {
    range.inputRange = [0, scrollWidth];
    range.outputRange = [1, 0];
    range.scaleInputRange = [0]
  } else if (i + 1 === numberOfCards) {
    range.inputRange = [(i - 1) * scrollWidth, (i * scrollWidth) - 80];
    range.outputRange = [0, 1];
  } else {
    range.inputRange = [(i - 1) * scrollWidth, i * scrollWidth, (i + 1) * scrollWidth]
    range.outputRange = [0, 1, 0];
  }
  return (
    <Animated.View style={[
      styles.animatedDotContainer,
      { backgroundColor: inActiveColor },
      {
        transform: [{
          scale: scrollAnimatedValue.interpolate({
            outputRange: [0.6, 0.7, 1, 1, 1, 0.7, 0.6],
            inputRange: [(i - 3) * scrollWidth, (i - 2) * scrollWidth, (i - 1) * scrollWidth, i * scrollWidth, (i + 1) * scrollWidth, (i + 2) * scrollWidth, (i + 3) * scrollWidth]
          })
        }]
      }]}>
      <Animated.View style={[
        styles.activeDot,
        { backgroundColor: activeColor },
        {
          opacity: scrollAnimatedValue.interpolate({
            extrapolate: 'clamp',
            inputRange: range.inputRange,
            outputRange: range.outputRange
          }),
        }]} />
    </Animated.View>
  )
}

export default AnimatedDot;
