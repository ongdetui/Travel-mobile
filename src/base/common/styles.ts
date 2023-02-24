import Color from '@theme/Color';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND,
  },

  centerNoFlex: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  justifyBetween: {
    justifyContent: 'space-between',
  },

  alignItemsEnd: {
    alignItems: 'flex-end',
  },
});

export default Styles;
