import {getIconComponent} from '@assets/icon';
import Images from '@assets/images';
import {getSize} from '@base/common/responsive';
import Styles from '@base/common/styles';
import {keyExtractor} from '@base/utils/utils';
import {Block, Image, Text} from '@components';
import React, {useCallback, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ItemTripComponent from './components/ItemTripComponent';
import TabComponent from './components/TabComponent';
import styles from './profile.style';

const Icon = getIconComponent('ionicons');

function TripScreen({navigation}) {
  const [tabActive, setTabActive] = useState<number>(0);

  const handleItemTab = useCallback((index: number) => {
    setTabActive(index);
  }, []);

  const renderItem = useCallback(() => {
    return <ItemTripComponent />;
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <Block row alignCenter marginLeft={12}>
        <TouchableOpacity onPress={navigation.goBack} activeOpacity={0.5}>
          <Icon
            name={'arrow-back-outline'}
            color={'#120D26'}
            size={getSize.m(26)}
          />
        </TouchableOpacity>
        <Text style={styles.textProfile}>Chuyến đi</Text>
      </Block>
      <Image style={styles.avatar} source={Images.IMG_AVATAR} />
      <Text marginBottom={15} style={styles.textNameAccount}>
        Ashfak Sayem
      </Text>
      <TabComponent handleItemTab={handleItemTab} tabActive={tabActive} />
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

export default TripScreen;
