import {Dimensions} from 'react-native';
import Colors from './Colors';

const deviceWidth = Dimensions.get('window').width;

const getFontSize = size => {
  return 0.0028 * deviceWidth * size;
};

const black = Colors.DARK_GREY;

const Fonts = {
  black: (s = 18, c = black) => ({
    fontSize: getFontSize(s),
    color: c,
  }),
  bold: (s = 18, c = black) => ({
    fontSize: getFontSize(s),
    color: c,
  }),
  light: (s = 18, c = black) => ({
    fontSize: getFontSize(s),
    color: c,
  }),
  regular: (s = 18, c = black) => ({
    fontSize: getFontSize(s),
    color: c,
  }),
  semiBold: (s = 18, c = black) => ({
    fontSize: getFontSize(s),
    color: c,
  }),
  extraBold: (s = 18, c = black) => ({
    fontSize: getFontSize(s),
    color: c,
  }),
  extraLight: (s = 18, c = black) => ({
    fontSize: getFontSize(s),
    color: c,
  }),
  medium: (s = 18, c = black) => ({
    fontSize: getFontSize(s),
    color: c,
  }),
};

export default Fonts;
