import { getIconComponent } from '@assets/icon';
import Images from '@assets/images';
import { getSize } from '@base/common/responsive';
import Styles from '@base/common/styles';
import { keyExtractor } from '@base/utils/utils';
import { Block, Image, Text } from '@components';
import Color from '@theme/Color';
import React, { useCallback, useState } from 'react';
import { FlatList, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import ItemVoucherComponent from './components/ItemVoucherComponent';
import TabComponent from './components/TabComponent';
import styles from './profile.style';

const DATA = [
  {
    name: 'Tất cả',
    id: 0,
  },
  {
    name: 'Đã sử dụng',
    id: 1,
  },
];

const Icon = getIconComponent('ionicons');

function VoucherScreen({navigation}) {
  const {top} = useSafeAreaInsets();
  const [tabActive, setTabActive] = useState<number>(0);

  const handleItemTab = useCallback((index: number) => {
    setTabActive(index);
  }, []);

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

  const renderItemVoucher = useCallback(() => {
    return <ItemVoucherComponent />;
  }, []);

  return (
    <SafeAreaView style={[Styles.container, {marginTop: -top}]}>
      <Block paddingTop={top} style={styles.tabBar}>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles.btnBack}
          activeOpacity={0.5}>
          <Icon
            size={getSize.m(26)}
            name={'chevron-back-outline'}
            color={Color.WHITE}
          />
        </TouchableOpacity>
        <Text style={styles.textTitle}>Kho voucher</Text>
      </Block>
      <Block row alignCenter marginTop={20} marginHorizontal={12}>
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
          <Text style={styles.textSave}>Lưu</Text>
        </TouchableOpacity>
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
      <TabComponent
        data={DATA}
        handleItemTab={handleItemTab}
        tabActive={tabActive}
      />
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={keyExtractor}
        renderItem={renderItemVoucher}
      />
    </SafeAreaView>
  );
}

export default VoucherScreen;
