import Images from '@assets/images';
import {Block, Image, Text} from '@components';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../profile.style';

function ItemVoucherComponent() {
  return (
    <Block row alignCenter marginBottom={20} marginHorizontal={12}>
      <Image source={Images.IMG_VOUCHER} width={95} height={95} />
      <Block flex marginLeft={8}>
        <Block row alignCenter flex>
          <Text flex style={styles.textTitleVoucher}>Giảm 10% Đơn Tối Thiểu ₫200k Giảm tối đa ₫50k</Text>
          <TouchableOpacity>
            <Text style={styles.textUseNow}>Dùng ngay</Text>
          </TouchableOpacity>
        </Block>
        <Block row alignCenter flex space={'between'}>
          <Text style={styles.textTime}>Sắp hết hạn: Còn 4 giờ</Text>
          <TouchableOpacity>
            <Text style={styles.condition}>Điều Kiện</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(ItemVoucherComponent);
