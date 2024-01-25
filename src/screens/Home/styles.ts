import {StyleSheet} from 'react-native';
import TYPOGRAPHY from '../../styles/typography';

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: TYPOGRAPHY.fontSizes.large,
    fontWeight: '700',
  },
  highlight: {
    fontWeight: '700',
  },
});
