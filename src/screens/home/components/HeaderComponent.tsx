import {getIconComponent} from '@assets/icon';
import Images from '@assets/images';
import {getSize} from '@base/common/responsive';
import {keyExtractor} from '@base/utils/utils';
import {Block, Image, Text} from '@components';
import Color from '@theme/Color';
import React, {memo, useCallback} from 'react';
import {
  FlatList,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../home.style';
import ItemAddressTravel from './ItemAddressTravel';

const Icon = getIconComponent('ionicons');

const IconFilter = getIconComponent('app');

function HeaderComponent() {
  const renderItem = useCallback(() => {
    return (
      <Block alignCenter marginLeft={12}>
        <Block style={styles.categoryBox}>
          <Image source={Images.CATEGORY} style={styles.imageCategory} />
        </Block>
        <Text style={styles.textCategory}>Địa điểm</Text>
      </Block>
    );
  }, []);

  const renderItemTravel = useCallback(() => {
    return <ItemAddressTravel />;
  }, []);

  return (
    <>
      <Block marginHorizontal={12}>
        <Text style={styles.textNameAccount}>Hi Lam,</Text>
        <Text style={styles.textWantGo}>Bạn đang muốn đi đâu?</Text>
        <Block row alignCenter>
          <Block style={styles.inputSearch}>
            <Icon
              name={'search-outline'}
              size={getSize.m(24)}
              color={'#CACACA'}
            />
            <TextInput
              placeholderTextColor={'#9B9B9B'}
              style={styles.textInput}
              placeholder="Tìm kiếm"
            />
          </Block>
          <TouchableOpacity style={styles.btnFilter}>
            <IconFilter
              color={Color.WHITE}
              name={'li_settings-2'}
              size={getSize.m(22)}
            />
          </TouchableOpacity>
        </Block>
      </Block>
      <Block style={styles.category}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 4]}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Block>
      <Block marginHorizontal={12} marginTop={30}>
        <Image source={Images.BANNER} style={styles.imagesBanner} />
      </Block>
      <Block style={styles.btnTutorial} backgroundColor="#9EB60A">
        <Icon name={'flame-outline'} color={Color.WHITE} size={getSize.m(24)} />
        <Text style={styles.textTutorial}>Hướng dẫn viên</Text>
      </Block>
      <Block marginTop={30} marginBottom={40}>
        <FlatList
          data={[1, 2, 3, 3, 3, 3, 3]}
          keyExtractor={keyExtractor}
          renderItem={renderItemTravel}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Block>
      <ImageBackground style={styles.bgExplore} source={Images.IMG_EXPLORE}>
        <Text style={styles.textTitleBg}>Tạo chuyến đi của riêng mình</Text>
        <Text style={styles.textNoteBg}>Liên hệ với HDV địa phương để tạo chuyến đi của bạn</Text>
        <TouchableOpacity style={styles.btnExplore} activeOpacity={0.5}>
          <Text style={styles.textExplore}>Khám phá</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

export default memo(HeaderComponent);
