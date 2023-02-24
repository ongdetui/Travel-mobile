import { getIconComponent } from '@assets/icon';
import { getSize } from '@base/common/responsive';
import Styles from '@base/common/styles';
import { keyExtractor } from '@base/utils/utils';
import { Block, Text } from '@components';
import Color from '@theme/Color';
import React, { useCallback } from 'react';
import { FlatList, SectionList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from './components/HeaderComponent';
import ItemTravelComponent from './components/ItemTravelComponent';
import styles from './home.style';

const Icon = getIconComponent('ionicons');

const DATA = [
  {
    title: 'Tour phổ biến',
    data: [{data: [1, 2, 3, 4]}],
  },
  {
    title: 'Cẩm nang',
    data: [{data: [1, 2, 3, 4]}],
  },
];

function HomeScreen() {
  const renderSectionHeader = useCallback(({section: {title}}) => {
    return (
      <Block
        marginHorizontal={12}
        marginBottom={16}
        row
        alignCenter
        space={'between'}>
        <Text style={styles.textTitle}>{title}</Text>
        <Block row alignCenter>
          <Text style={styles.textSeeAll}>Xem tất cả</Text>
          <Icon
            size={getSize.m(18)}
            name={'chevron-forward-outline'}
            color={'#9EB60A'}
          />
        </Block>
      </Block>
    );
  }, []);

  const renderListTravel = useCallback(({section: {data}}) => {
    return (
      <FlatList
        data={data[0].data}
        keyExtractor={keyExtractor}
        renderItem={renderItemTravel}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    );
  }, []);

  const renderItemTravel = useCallback(() => <ItemTravelComponent />, []);

  return (
    <SafeAreaView edges={['top']} style={Styles.container}>
      <Block
        paddingBottom={12}
        marginHorizontal={12}
        row
        alignCenter
        space={'between'}>
        <Icon name={'menu-outline'} color={'#6D7D95'} size={getSize.m(24)} />
        <Text style={styles.titleTabBar}>Dhaka, Bangladesh</Text>
        <TouchableOpacity>
          <Icon
            name={'notifications-outline'}
            color={Color.BLACK}
            size={getSize.m(24)}
          />
        </TouchableOpacity>
      </Block>
      <SectionList
        sections={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderListTravel}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={<HeaderComponent />}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
