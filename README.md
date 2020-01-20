# react-native-animated-scroll-indicators
A package to display instagram-like animated scroll indicators on iOS as well as android.

![](example.gif)

## Installation
Using npm:
```
npm install --save react-native-animated-scroll-indicators
```
or using yarn:
```
yarn add react-native-animated-scroll-indicators
```

## Usage
```
import RNAnimatedScrollIndicators from 'react-native-animated-scroll-indicators';

  ...
  scrollX = new Animated.Value(0);

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Animated.ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
              { useNativeDriver: true })}
          >
            <View style={{ flex: 1, backgroundColor: 'white', width }} />
            <View style={{ flex: 1, backgroundColor: 'gray', width }} />
            <View style={{ flex: 1, backgroundColor: 'white', width }} />
            <View style={{ flex: 1, backgroundColor: 'gray', width }} />
            <View style={{ flex: 1, backgroundColor: 'white', width }} />
            <View style={{ flex: 1, backgroundColor: 'gray', width }} />
            <View style={{ flex: 1, backgroundColor: 'white', width }} />
          </Animated.ScrollView>
          <View style={{
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            marginBottom: 20,
            position: 'absolute'
          }}>
            <RNAnimatedScrollIndicators
              numberOfCards={7}
              scrollWidth={width}
              activeColor={'black'}
              inActiveColor={'pink'}
              scrollAnimatedValue={this.scrollX}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
  ...
```
