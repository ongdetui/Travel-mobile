import { getSize, WIDTH_SCREEN } from '@base/common/responsive';
import Styles from '@base/common/styles';
import Color from '@theme/Color';
import Font from '@theme/Font';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    alignSelf: 'center',
    borderRadius: getSize.m(50),
    width: getSize.m(100),
    height: getSize.m(100),
    marginTop: getSize.m(12),
  },

  textNameAccount: {
    fontSize: getSize.m(22, 0.3),
    fontFamily: Font.font_regular_400,
    alignSelf: 'center',
    marginTop: getSize.m(12),
    color: '#120D26',
  },

  btnVoucher: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#9EB60A',
    borderWidth: getSize.m(1),
    borderRadius: getSize.m(10),
    height: getSize.m(50),
    width: (WIDTH_SCREEN - getSize.m(54)) / 2,
    justifyContent: 'center',
  },

  textBtnVoucher: {
    color: '#9EB60A',
    fontFamily: Font.font_regular_400,
    fontSize: getSize.m(16, 0.3),
    marginLeft: getSize.m(6),
  },

  textProfile: {
    fontSize: getSize.m(22, 0.3),
    fontFamily: Font.font_medium_500,
    color: '#120D26',
    marginLeft: getSize.m(12),
  },

  itemTab: {
    marginHorizontal: getSize.m(12),
    paddingVertical: getSize.m(7),
  },

  itemTabActive: {
    borderBottomColor: '#AFCA0B',
    borderBottomWidth: getSize.m(2),
  },

  textTab: {
    fontSize: getSize.m(16, 0.3),
    fontFamily: Font.font_medium_500,
  },

  textUser: {
    color: '#00000080',
    fontSize: getSize.m(14, 0.3),
    fontFamily: Font.font_regular_400,
  },

  textStatus: {
    color: '#9EB60A',
    fontSize: getSize.m(11, 0.3),
    fontFamily: Font.font_regular_400,
  },

  textTitleItem: {
    color: '#120D26',
    fontFamily: Font.font_medium_500,
    fontSize: getSize.m(16, 0.3),
    marginBottom: getSize.m(10),
  },

  textPrice: {
    fontFamily: Font.font_regular_400,
    fontSize: getSize.m(13, 0.3),
  },

  textMessageItem: {
    color: '#00000054',
    fontFamily: Font.font_regular_400,
    fontSize: getSize.m(11, 0.3),
  },

  btnRatting: {
    height: getSize.m(24),
    backgroundColor: '#9EB60A',
    borderRadius: getSize.m(4),
    ...Styles.centerNoFlex,
    paddingHorizontal: getSize.m(11),
    marginBottom: getSize.m(4),
    marginRight: getSize.m(4),
  },

  tabBar: {
    backgroundColor: '#AFCA0B',
    borderBottomRightRadius: getSize.m(32),
    flexDirection: 'row',
    paddingBottom: getSize.m(14),
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    color: '#FFFFFF',
    fontSize: getSize.m(20, 0.3),
    fontFamily: Font.font_medium_500,
    alignSelf: 'center',
  },

  btnBack: {
    position: 'absolute',
    left: getSize.m(12),
    bottom: getSize.m(18),
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
    backgroundColor: '#9EB60A',
    height: getSize.m(40),
    width: getSize.m(40),
    borderRadius: getSize.m(6),
    ...Styles.centerNoFlex,
    marginLeft: getSize.m(6),
  },

  textSave: {
    color: Color.WHITE,
    fontFamily: Font.font_regular_400,
    fontSize: getSize.m(13, 0.3),
  },

  category: {
    flexWrap: 'wrap',
    marginTop: getSize.m(20),
    marginBottom: getSize.m(20),
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

  textTitleVoucher: {
    color: '#000000',
    fontFamily: Font.font_medium_500,
    fontSize: getSize.m(14, 0.3),
    marginRight: getSize.m(8),
  },

  textUseNow: {
    color: '#EE4D2D',
    fontFamily: Font.font_regular_400,
    fontSize: getSize.m(13, 0.3),
  },

  textTime: {
    color: '#FF424F',
    fontFamily: Font.font_regular_400,
    fontSize: getSize.m(12, 0.3),
  },

  condition: {
    color: '#508BE3',
    fontFamily: Font.font_regular_400,
    fontSize: getSize.m(12, 0.3),
  },
});

export default styles;
