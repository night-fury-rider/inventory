import React from 'react';
import {ViewProps, ViewStyle, StyleProp, StyleSheet, View} from 'react-native';

type SkeletonProps = ViewProps & {
  animation?: 'none' | 'pulse' | 'wave';
  circle?: boolean;
  height?: ViewStyle['height'];
  skeletonStyle?: StyleProp<ViewStyle>;
  width?: ViewStyle['width'];
};

const SkeletonLoader = ({
  animation = 'wave',
  circle = false,
  height = 40,
  skeletonStyle = {},
  width = 80,
}: SkeletonProps) => {
  return (
    <View style={[styles.container, {}]}>
      {[...Array(15)].map((obj: any, index: number) => (
        <React.Fragment key={index}></React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    columnGap: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 50,
    rowGap: 50,
  },
  skeleton: {},
});

export default SkeletonLoader;
