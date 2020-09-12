import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

import {ProgressBar} from '../../Components';

import styles from './Styles/TrialGenderScreenStyle';
import {Images, Colors} from '../../Themes';

const TrialGenderScreen = ({navigation, route}) => {
  const [gender, setGender] = useState('');

  const onPressNext = () => navigation.navigate('TrialHeightScreen');

  const onPressChooseGender = (genderChoose) => () => {
    setGender(genderChoose);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Images.background05} style={styles.background}>
        <ProgressBar percent={25} />
        <View style={styles.viewContent}>
          <Text numberOfLines={1} style={styles.textTitle}>
            Giới tính
          </Text>
          <View style={styles.viewChooseGender}>
            <TouchableOpacity
              style={[
                styles.buttonMaleGender,
                gender === 'Male' && {borderColor: Colors.burntSienna},
              ]}
              onPress={onPressChooseGender('Male')}>
              <Image
                source={Images.maleGender}
                style={styles.iconMaleGender}
                resizeMode="contain"
              />
              <Text numberOfLines={1} style={styles.textMaleGender}>
                Nam
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonFemaleGender,
                gender === 'Female' && {borderColor: Colors.burntSienna},
              ]}
              onPress={onPressChooseGender('Female')}>
              <Image
                source={Images.femaleGender}
                style={styles.iconFemaleGender}
                resizeMode="contain"
              />
              <Text numberOfLines={1} style={styles.textFemaleGender}>
                Nữ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity
            style={[styles.buttonNext, gender === '' && {opacity: 0.5}]}
            onPress={onPressNext}
            disabled={gender === ''}>
            <Text numberOfLines={1} style={styles.textButtonNext}>
              Tiếp tục
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TrialGenderScreen;
