import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../style';
import {Theme} from '../../../types';

const STYLESHEET_ID = 'stylesheet.marking';
export default function styleConstructor(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    dots: {
      flexDirection: 'row'
    },
    periods: {
      alignSelf: 'stretch'
    },
    period: {
      height: 4,
      marginVertical: 1,
      backgroundColor: appStyle.dotColor
    },
    startingDay: {
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2,
      marginLeft: 4
    },
    endingDay: {
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
      marginRight: 4
    },
    ...(theme.stylesheet?.marking  || theme[STYLESHEET_ID] || {})
  });
}
