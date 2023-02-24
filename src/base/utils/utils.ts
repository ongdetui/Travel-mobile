export const keyExtractor = (item, index) => 'item_' + item.id + '_' + index;

// export const notifyInvalid = (
//   message: string,
//   position: 'bottom' | 'top' | 'center' = 'center',
// ) => {
//   Toast.showWithGravity(
//     message,
//     Toast.SHORT,
//     position === 'bottom'
//       ? Toast.BOTTOM
//       : position === 'top'
//       ? Toast.TOP
//       : Toast.CENTER,
//     ['RCTModalHostViewController', 'UIAlertController'],
//   );
// };

export const toPointFormat = money => {
  if (!money) {
    return '0';
  }
  return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
