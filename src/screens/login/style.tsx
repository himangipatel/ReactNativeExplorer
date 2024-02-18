import {StyleSheet} from 'react-native';
import responsive from '../../utils/responsive';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {flex: 1},
  topContainer: {
    flex: 1,
    backgroundColor: colors.primary,

    padding: responsive.padding(20),
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: colors.secondary,
    padding: 10,
    justifyContent: 'space-between',
  },
  smallText: {
    fontSize: 12,
    fontWeight: 'bold',
    opacity: 0.7,
    color: colors.lightTextColor,
  },
  loginText: {
    fontSize: 24,
    opacity: 1,
    paddingVertical: responsive.padding(15),
  },
  errorText: {
    color: 'red',
    marginStart: 10,
    marginBottom: 10,
  },
  active: {fontWeight: 'bold', opacity: 1},
  inActive: {fontWeight: 'bold', opacity: 0.7},
  languageContainer:{
    flexDirection: 'row',
    paddingVertical: responsive.padding(50),
    justifyContent: 'flex-end',
  },
  topAnimatedView:{
    justifyContent: 'flex-end',
    flex: 1,
  }
});
