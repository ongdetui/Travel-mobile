import icoMoonConfig from '@assets/icon/selection.json';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

const Icons = {
  app: CustomIcon,
  ionicons: Ionicons,
};

export type IconType = keyof typeof Icons;

export const getIconComponent = (componentName: IconType) => {
  if (!Icons[componentName]) {
    return null;
  }
  return Icons[componentName];
};
