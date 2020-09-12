import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../../Themes';

export default StyleSheet.create({
  viewProgressBar: {
    height: Metrics.screenHeight / 18,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: Metrics.halfTripleBaseMargin,
  },
  viewFullProgress: {
    width: '70%',
    height: Metrics.screenHeight / 70,
    backgroundColor: Colors.blackOpacity,
    borderRadius: Metrics.borderRadiusSmall,
    flexDirection: 'row',
  },
  viewProgress: {
    flex: 0,
    borderRadius: Metrics.borderRadiusSmall,
    backgroundColor: Colors.concrete,
  },
});
