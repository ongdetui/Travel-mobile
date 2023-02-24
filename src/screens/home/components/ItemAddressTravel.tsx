import {getIconComponent} from '@assets/icon';
import Images from '@assets/images';
import {getSize} from '@base/common/responsive';
import {Block, Image, Text} from '@components';
import React, {memo} from 'react';
import styles from '../home.style';

const Icon = getIconComponent('ionicons');

function ItemAddressTravel() {
  return (
    <Block style={styles.itemTravel}>
      <Image
        borderRadius={10}
        source={Images.BANNER}
        width={200}
        height={117}
      />
      <Block marginTop={12} row alignCenter space={'between'}>
        <Block flex>
          <Text style={styles.textNameTravel} numberOfLines={2}>Mai Lam</Text>
          <Block flex row alignCenter>
            <Icon
              color={'#FF9680'}
              size={getSize.m(18)}
              name={'location-outline'}
            />
            <Text style={styles.textAddress}>Bali, Indonesia</Text>
          </Block>
        </Block>
        <Block row alignCenter>
          <Icon name={'star'} color={'#FF5733'} size={getSize.m(18)} />
          <Text style={styles.textStar}>4.8</Text>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(ItemAddressTravel);
