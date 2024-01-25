import {StyleSheet} from 'react-native';
import COLORS from '../../styles/colors';
import TYPOGRAPHY from '../../styles/typography';

export const styles = StyleSheet.create({
  superiorContainer: {
    paddingTop: 70,
    paddingHorizontal: 24,
    backgroundColor: COLORS.gray[700],
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    marginTop: 24,
  },
  addButton: {
    backgroundColor: COLORS.blue,
    padding: 24,
    borderRadius: 6,
    bottom: -30,
  },
  addButtonIcon: {
    height: 16,
    width: 16,
  },

  inferiorContainer: {},

  numbersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 66,
  },

  blueText: {
    color: COLORS.blue,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.fontSizes.large,
  },

  purpleText: {
    color: COLORS.purple,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.fontSizes.large,
  },

  number: {
    fontWeight: '700',
    backgroundColor: COLORS.gray[300],
    color: COLORS.gray[100],
    paddingVertical: 1,
    paddingHorizontal: 12,
    borderRadius: 999,
  },

  row: {
    flexDirection: 'row',
    gap: 8,
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[400],
    marginHorizontal: 24,
  },
});
