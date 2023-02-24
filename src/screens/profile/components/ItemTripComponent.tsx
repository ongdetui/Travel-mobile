import Images from '@assets/images';
import {Block, Image, Text} from '@components';
import Color from '@theme/Color';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../profile.style';

function ItemTripComponent() {
  return (
    <Block
      radius={16}
      marginBottom={20}
      marginHorizontal={12}
      padding={7}
      backgroundColor={Color.WHITE}>
      <Block marginBottom={4} row alignCenter space={'between'}>
        <Text style={styles.textUser}>Tên HDV</Text>
        <Text style={styles.textStatus}>Đã thực hiện</Text>
      </Block>
      <Block row alignCenter>
        <Image
          borderRadius={12}
          source={Images.IMG_TRAVEL}
          width={100}
          height={70}
        />
        <Block marginLeft={8}>
          <Text style={styles.textTitleItem}>Du lịch bắc ninh 7 ngày</Text>
          <Text color={Color.BLACK} style={styles.textPrice}>
            ₫13.000 <Text color="#9EB60A">₫7.900</Text>
          </Text>
        </Block>
      </Block>
      <Block marginTop={8} row alignCenter space={'between'}>
        <Text style={styles.textMessageItem}>Không nhận được đánh giá</Text>
        <TouchableOpacity style={styles.btnRatting} activeOpacity={0.5}>
          <Text style={styles.textPrice} color={Color.WHITE}>
            Đánh giá
          </Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
}

export default memo(ItemTripComponent);
