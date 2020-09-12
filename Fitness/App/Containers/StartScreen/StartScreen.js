import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';

import styles from './Styles/StartScreenStyle';
import {Images} from '../../Themes';

const StartScren = ({navigation}) => {
  const onPressTrial = () => navigation.navigate('TrialGenderScreen');

  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'never'}}>
      <ImageBackground source={Images.background07} style={styles.background}>
        <View style={styles.viewContent}>
          <Text numberOfLines={3} style={styles.textTitle}>
            {`Chinh phục \n bản thân`}
          </Text>
          <Text numberOfLines={5} style={styles.textDescription}>
            Hoà mình vào thế giới với những người bạn cùng chung đam mê chinh
            phục sức khoẻ thể hình
          </Text>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.buttonTrial} onPress={onPressTrial}>
            <Text numberOfLines={1} style={styles.textButtonTrial}>
              Học thử
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSignIn}>
            <Text numberOfLines={1} style={styles.textButtonSignIn}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default StartScren;
