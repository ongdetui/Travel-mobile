import {getIconComponent} from '@assets/icon';
import Images from '@assets/images';
import {getSize} from '@base/common/responsive';
import Styles from '@base/common/styles';
import {Block, Image, Text} from '@components';
import {TRIP_SCREEN, VOUCHER_SCREEN} from 'navigation/screen';
import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './profile.style';

const Icon = getIconComponent('ionicons');

function ProfileScreen({navigation}) {
  const handleTrip = useCallback(() => {
    navigation.navigate(TRIP_SCREEN);
  }, []);

  const handleVoucher = useCallback(() => {
    navigation.navigate(VOUCHER_SCREEN);
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <Image style={styles.avatar} source={Images.IMG_AVATAR} />
      <Text style={styles.textNameAccount}>Ashfak Sayem</Text>
      <Block
        row
        space={'between'}
        alignCenter
        marginTop={12}
        marginHorizontal={12}>
        <TouchableOpacity
          onPress={handleVoucher}
          style={styles.btnVoucher}
          activeOpacity={0.5}>
          <Icon
            name={'create-outline'}
            size={getSize.m(22)}
            color={'#9EB60A'}
          />
          <Text style={styles.textBtnVoucher}>Voucher</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleTrip}
          style={styles.btnVoucher}
          activeOpacity={0.5}>
          <Icon
            name={'create-outline'}
            size={getSize.m(22)}
            color={'#9EB60A'}
          />
          <Text style={styles.textBtnVoucher}>Chuyến đi</Text>
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
}

export default ProfileScreen;
