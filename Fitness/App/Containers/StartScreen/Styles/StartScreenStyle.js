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
    textAlign: 'center',
    marginBottom: Metrics.quintupleBaseMargin,
  },
  textDescription: {
    color: Colors.white,
    fontSize: Normalize(20),
    fontFamily: Fonts.regular,
  },
  viewButton: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTrial: {
    flex: 0.5,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenHeight / 17,
  },
  textButtonTrial: {
    color: Colors.black,
    fontSize: Normalize(20),
    fontFamily: Fonts.bold,
    textTransform: 'uppercase',
  },
  buttonSignIn: {
    flex: 0.5,
    backgroundColor: Colors.burntSienna,
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenHeight / 17,
  },
  textButtonSignIn: {
    color: Colors.white,
    fontSize: Normalize(20),
    fontFamily: Fonts.bold,
    textTransform: 'uppercase',
  },
});
