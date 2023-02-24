import Images from '@assets/images';
import { Block, Image, Text } from '@components';
import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from '../home.style';

function ItemTravelComponent() {
  return (
    <Block style={styles.itemTour}>
      <Image source={Images.IMG_TRAVEL} style={styles.imageTravel} />
      <Text style={styles.textTitleTour}>Đi về miền quan họ à ơi câu hát</Text>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.textSeeMore}>Xem chi tiết</Text>
      </TouchableOpacity>
    </Block>
  );
}

export default memo(ItemTravelComponent);
