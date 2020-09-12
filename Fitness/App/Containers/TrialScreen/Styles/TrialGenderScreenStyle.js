import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts, Normalize} from '../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: Metrics.doubleBaseMargin,
    opacity: 0.85,
  },
  viewContent: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: Colors.white,
    fontSize: Normalize(38),
    fontFamily: Fonts.bold,
    textTransform: 'uppercase',
  },
  viewChooseGender: {
    width: Metrics.screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.quadrupleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
  buttonMaleGender: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.borderRadiusSmall,
    borderWidth: 3,
    borderColor: Colors.white,
    width: Metrics.screenWidth / 2 - Metrics.tripleBaseMargin,
    height: Metrics.screenWidth / 2 - Metrics.tripleBaseMargin,
  },
  textMaleGender: {
    color: Colors.white,
    fontSize: Normalize(25),
    fontFamily: Fonts.bold,
    marginTop: Metrics.baseMargin,
  },
  iconMaleGender: {
    marginBottom: Metrics.baseMargin,
  },
  buttonFemaleGender: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.borderRadiusSmall,
    borderWidth: 3,
    borderColor: Colors.white,
    width: Metrics.screenWidth / 2 - Metrics.tripleBaseMargin,
    height: Metrics.screenWidth / 2 - Metrics.tripleBaseMargin,
  },
  textFemaleGender: {
    color: Colors.white,
    fontSize: Normalize(25),
    fontFamily: Fonts.bold,
    marginTop: Metrics.baseMargin,
  },
  iconFemaleGender: {
    marginBottom: Metrics.baseMargin,
  },
  viewButton: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonNext: {
    flex: 0.9,
    height: Metrics.screenHeight / 17,
    backgroundColor: Colors.burntSienna,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.borderRadiusSmall,
  },
  textButtonNext: {
    color: Colors.white,
    fontSize: Normalize(20),
    fontFamily: Fonts.black,
    textTransform: 'uppercase',
  },
});
