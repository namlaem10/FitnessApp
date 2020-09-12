import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

import {WheelPicker} from 'react-native-wheel-picker-android';

import {ProgressBar} from '../../Components';

import styles from './Styles/TrialHeightScreenStyle';
import {Images, Colors, Normalize, Fonts} from '../../Themes';

let arrayHeight = [];
for (let i = 130; i <= 230; i++) {
  arrayHeight.push(i.toString());
}

const TrialHeightScreen = ({navigation, route}) => {
  const [height, setHeight] = useState(0);

  const onChangeHeight = (index) => {
    setHeight(arrayHeight[index]);
  };

  const onPressNext = () => navigation.navigate('TrialHeightScreen');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Images.background05} style={styles.background}>
        <ProgressBar percent={50} />
        <View style={styles.viewContent}>
          <Text numberOfLines={1} style={styles.textTitle}>
            Cân nặng
          </Text>
          <View style={styles.viewChooseHeight}>
            <WheelPicker
              initPosition={40}
              data={arrayHeight}
              onItemSelected={onChangeHeight}
              isCyclic={true}
              selectedItemTextColor={Colors.white}
              selectedItemTextSize={Normalize(25)}
              selectedItemTextFontFamily={Fonts.regular}
              itemTextFontFamily={Fonts.regular}
              hideIndicator
              backgroundColor={'blue'}
              style={{
                width: 300,
                height: 300,
              }}
            />
          </View>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.buttonNext} onPress={onPressNext}>
            <Text numberOfLines={1} style={styles.textButtonNext}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TrialHeightScreen;
