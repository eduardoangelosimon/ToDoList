import {StyleSheet} from 'react-native';
import COLORS from '../../styles/colors';
import TYPOGRAPHY from '../../styles/typography';

export const styles = (inputFocused: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: COLORS.gray[500],
      borderRadius: 8,
      color: COLORS.gray[100],
      padding: 16,
      fontSize: TYPOGRAPHY.fontSizes.large,
      fontFamily: '"Inter", "sans-serif"',
      borderColor: inputFocused ? COLORS.darkPurple : COLORS.gray[700],
      borderWidth: 1,
    },
  });
