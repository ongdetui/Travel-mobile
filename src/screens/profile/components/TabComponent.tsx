import {Block, Text} from '@components';
import React, {memo} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import styles from '../profile.style';

const LIST_TAB = [
  {
    name: 'Chờ xác nhận',
    id: 0,
  },
  {
    name: 'Đã đi',
    id: 1,
  },
  {
    name: 'Hoàn tiền',
    id: 2,
  },
  {
    name: 'Đã hủy',
    id: 3,
  },
  {
    name: 'Đã lưu',
    id: 4,
  },
];

interface TabProfile {
  tabActive: number;
  handleItemTab: (index: number) => void;
  data?: Array<any>;
}

function TabComponent({tabActive, handleItemTab, data}: TabProfile) {
  return (
    <Block marginBottom={20}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {(data || LIST_TAB).map(item => (
          <TouchableOpacity
            onPress={() => handleItemTab(item.id)}
            style={[
              styles.itemTab,
              tabActive === item.id && styles.itemTabActive,
            ]}
            activeOpacity={0.5}
            key={item.id}>
            <Text color={'#343A40'} style={styles.textTab}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Block>
  );
}

export default memo(TabComponent);
