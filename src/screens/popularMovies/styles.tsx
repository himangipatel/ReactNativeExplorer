import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import responsive from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  },
  headerContainer:{
    flexDirection: 'row',
    paddingVertical: responsive.padding(15),
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: colors.lightTextColor,
    fontSize: 24,
    opacity: 1,
    textAlign: 'left',
  },
  movieItemContainer: {
    flex: 1,
    padding: 10,
  },
  movieImage: {
    width: responsive.pWidth(45),
    height: responsive.height(120),
  },
  movieName: {
    color: colors.lightTextColor,
    textAlign: 'left',
  },
});
