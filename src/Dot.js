import React from 'react';
import { View, Animated } from 'react-native';

import { indicatorStyles as styles } from './styles';

const Dot = ({ i, scrollAnimatedValue, numberOfCards, scrollWidth, activeColor, inActiveColor }) => {
  const range = {};
  if (i === 0) {
    range.inputRange = [0, scrollWidth];
    range.outputRange = [1, 0];
  } else if (i + 1 === numberOfCards) {
    range.inputRange = [(i - 1) * scrollWidth, (i * scrollWidth)];
    range.outputRange = [0, 1];
  } else {
    range.inputRange = [(i - 1) * scrollWidth, i * scrollWidth, (i + 1) * scrollWidth]
    range.outputRange = [0, 1, 0];
  }
  return (
    <View style={[styles.dotContainer, { backgroundColor: inActiveColor }]}>
      <Animated.View style={[
        styles.activeDot,
        { backgroundColor: activeColor }
        , {
          opacity: scrollAnimatedValue.interpolate({
            extrapolate: 'clamp',
            inputRange: range.inputRange,
            outputRange: range.outputRange
          }),
        }]} />
    </View>
  )
}

export default Dot;
