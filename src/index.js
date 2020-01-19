import React from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';

import Dot from './Dot';
import AnimatedDot from './AnimatedDot';
import { indicatorStyles as styles } from './styles';

const DOT_WIDTH = 8;
const SPACE_BETWEEN_DOTS = 12;

const Indicators = ({ scrollAnimatedValue, numberOfCards, scrollWidth, activeColor = '#8F9499', inActiveColor = '#fff' }) => {
  if (numberOfCards <= 5) {
    return (
      <View style={styles.container}>
        <View style={[styles.dotsContainer, { width: DOT_WIDTH + (numberOfCards - 1) * SPACE_BETWEEN_DOTS + (numberOfCards - 1) * DOT_WIDTH }]}>
          {
            [...Array(numberOfCards)].map((e, i) =>
              <Dot
                i={i}
                key={i}
                activeColor={activeColor}
                scrollWidth={scrollWidth}
                inActiveColor={inActiveColor}
                numberOfCards={numberOfCards}
                scrollAnimatedValue={scrollAnimatedValue}
              />
            )
          }
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.animatedDotsContainer}>
        <Animated.View style={[
          styles.animatedDotsView
          , {
            transform: [{
              translateX: scrollAnimatedValue.interpolate({
                extrapolate: 'clamp',
                outputRange: [0, -(12 + 8) * (numberOfCards - 5)],
                inputRange: [2 * scrollWidth, ((numberOfCards) - 3) * scrollWidth]
              })
            }]
          }
        ]}>
          {
            [...Array(numberOfCards)].map((e, i) =>
              <AnimatedDot
                i={i}
                key={i}
                activeColor={activeColor}
                scrollWidth={scrollWidth}
                inActiveColor={inActiveColor}
                numberOfCards={numberOfCards}
                scrollAnimatedValue={scrollAnimatedValue}
              />
            )
          }
        </Animated.View>
      </View>
    </View>
  )
}

Indicators.propTypes = {
  activeColor: PropTypes.string,
  inActiveColor: PropTypes.string,
  scrollWidth: PropTypes.number.isRequired,
  numberOfCards: PropTypes.number.isRequired,
  scrollAnimatedValue: PropTypes.any.isRequired // Animated.Value()
}

export default Indicators;
