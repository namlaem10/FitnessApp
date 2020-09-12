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
    fontSize: Normalize(46),
    fontFamily: Fonts.bold,
  },
  viewChooseHeight: {
    backgroundColor: 'red',
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
