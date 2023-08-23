import * as React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import styles from './style';

const ImageItem = ({item, onPress}: {item: any; onPress: any}) => {
  const progress = useSharedValue(1);

  React.useEffect(() => {
    if (item.isActive == true) progress.value = withTiming(2, {duration: 1000});
    else if (item.isActive == false)
      progress.value = withTiming(1, {duration: 1000});
  }, [item.isActive]);

  const rStyle = useAnimatedStyle(() => {
    return {
      height: 169 * progress.value,
    };
  });

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Animated.Image
        style={[styles.image, rStyle]}
        source={{uri: item.imageUrl}}
      />
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
};

export default ImageItem;
