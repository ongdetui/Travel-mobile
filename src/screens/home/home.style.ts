import { getSize, WIDTH_SCREEN } from '@base/common/responsive';
import Styles from '@base/common/styles';
import Color from '@theme/Color';
import Font from '@theme/Font';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleTabBar: {
    fontSize: getSize.m(14, 0.3),
    color: '#6A778B',
    fontFamily: Font.font_regular_400,
  },

  textNameAccount: {
    fontSize: getSize.m(18, 0.3),
    fontFamily: Font.font_regular_400,
    color: '#39414B',
  },

  textWantGo: {
    fontSize: getSize.m(32, 0.3),
    fontFamily: Font.font_bold_700,
    color: '#0A2753',
    marginBottom: getSize.m(12),
  },

  inputSearch: {
    borderColor: '#CACACA',
    borderRadius: getSize.m(6),
    borderWidth: getSize.m(1),
    paddingHorizontal: getSize.m(12),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: getSize.m(42),
  },

  textInput: {
    fontSize: getSize.m(14, 0.3),
    fontFamily: Font.font_regular_400,
    marginLeft: getSize.m(8),
    flex: 1,
    color: Color.BLACK,
  },

  btnFilter: {
    backgroundColor: '#674DEE',
    height: getSize.m(40),
    width: getSize.m(40),
    borderRadius: getSize.m(6),
    ...Styles.centerNoFlex,
    marginLeft: getSize.m(6),
  },

  category: {
    flexWrap: 'wrap',
    marginTop: getSize.m(30),
  },

  categoryBox: {
    width: getSize.m(70),
    height: getSize.m(70),
    borderRadius: getSize.m(35),
    backgroundColor: Color.WHITE,
    ...Styles.centerNoFlex,
  },

  imageCategory: {
    width: getSize.m(40),
    height: getSize.m(40),
  },

  textCategory: {
    fontSize: getSize.m(12, 0.3),
    fontFamily: Font.font_semi_bold_600,
    color: Color.BLACK,
    marginTop: getSize.m(6),
  },

  imagesBanner: {
    height: ((WIDTH_SCREEN - getSize.m(24)) * 233) / 335,
    width: WIDTH_SCREEN - getSize.m(24),
  },

  btnTutorial: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: getSize.m(12),
    height: getSize.m(40),
    borderRadius: getSize.m(6),
    marginTop: getSize.m(30),
    alignSelf: 'flex-start',
    paddingHorizontal: getSize.m(10),
  },

  textTutorial: {
    color: Color.WHITE,
    fontFamily: Font.font_regular_400,
    fontSize: getSize.m(14, 0.3),
    marginLeft: getSize.m(6),
  },

  itemTravel: {
    padding: getSize.m(10),
    borderRadius: getSize.m(16),
    backgroundColor: Color.WHITE,
    marginLeft: getSize.m(12),
  },

  textNameTravel: {
    fontSize: getSize.m(16, 0.3),
    color: '#0A2753',
    fontFamily: Font.font_regular_400,
    marginBottom: getSize.m(3),
  },

  textAddress: {
    color: '#6A778B',
    fontSize: getSize.m(12, 0.3),
    fontFamily: Font.font_regular_400,
  },

  textStar: {
    color: '#39414B',
    fontSize: getSize.m(14, 0.3),
    fontFamily: Font.font_regular_400,
    marginLeft: getSize.m(4),
  },

  bgExplore: {
    width: WIDTH_SCREEN,
    height: (WIDTH_SCREEN * 304) / 368,
    paddingHorizontal: getSize.m(20),
    paddingTop: getSize.m(20),
    marginBottom: getSize.m(30),
  },

  textTitleBg: {
    color: Color.WHITE,
    fontSize: getSize.m(28, 0.3),
    fontFamily: Font.font_regular_400,
    marginBottom: getSize.m(16),
  },

  textNoteBg: {
    fontSize: getSize.m(20, 0.3),
    fontFamily: Font.font_regular_400,
    color: Color.WHITE,
  },

  btnExplore: {
    backgroundColor: '#9EB60A',
    height: getSize.m(36),
    alignSelf: 'flex-start',
    paddingHorizontal: getSize.m(25),
    borderRadius: getSize.m(6),
    marginTop: getSize.m(20),
    ...Styles.centerNoFlex,
  },

  textExplore: {
    fontSize: getSize.m(16, 0.3),
    fontFamily: Font.font_regular_400,
    color: Color.WHITE,
  },

  textTitle: {
    fontSize: getSize.m(22, 0.3),
    fontFamily: Font.font_semi_bold_600,
    color: Color.BLACK,
  },

  textSeeAll: {
    color: '#9EB60A',
    fontFamily: Font.font_semi_bold_600,
    fontSize: getSize.m(12, 0.3),
  },

  imageTravel: {
    width: WIDTH_SCREEN * 0.6,
    height: (WIDTH_SCREEN * 0.6 * 111) / 280,
  },

  itemTour: {
    padding: getSize.m(12),
    marginLeft: getSize.m(12),
    backgroundColor: Color.WHITE,
    borderRadius: getSize.m(8),
    marginBottom: getSize.m(30),
  },

  textTitleTour: {
    fontSize: getSize.m(14, 0.3),
    fontFamily: Font.font_semi_bold_600,
    color: Color.BLACK,
    marginTop: getSize.m(8),
  },

  textSeeMore: {
    color: '#AFCA0B',
    fontSize: getSize.m(12, 0.3),
    textDecorationLine: 'underline',
    marginTop: getSize.m(4),
  },
});

export default styles;
