import React from 'react';
import {View} from 'react-native';

// Styles
import styles from './Styles/ProgressStyle';

const FProgressBar = ({percent}) => {
  return (
    <View style={styles.viewProgressBar}>
      <View style={styles.viewFullProgress}>
        <View style={[styles.viewProgress, {flex: percent / 100}]} />
      </View>
    </View>
  );
};

export default FProgressBar;
