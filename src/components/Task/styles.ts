import {StyleSheet} from 'react-native';
import COLORS from '../../styles/colors';
import TYPOGRAPHY from '../../styles/typography';

export const styles = (isCompleted: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: COLORS.gray[500],
      borderRadius: 8,
      color: COLORS.gray[100],
      padding: 16,
      fontSize: TYPOGRAPHY.fontSizes.medium,
      fontFamily: '"Inter", "sans-serif"',
      borderColor: isCompleted ? COLORS.gray[500] : COLORS.gray[400],
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    label: {
      fontSize: TYPOGRAPHY.fontSizes.medium,
      color: COLORS.gray[100],
      textDecorationLine: isCompleted ? 'line-through' : 'none',
      width: '70%',
    },
    trashButton: {
      height: 16,
      width: 14,
    },
  });
