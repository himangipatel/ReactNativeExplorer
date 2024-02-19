import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import responsive from '../utils/responsive';

interface AppButtonProps {
  label: string;
  disable:boolean;
  onPress?: (() => void) | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  rightIcon?: React.ReactNode;
}

const AppButton = ({label, onPress, style, rightIcon,disable}: AppButtonProps) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress} disabled={disable}>
      <View style={styles.container}>
        <Text style={styles.btnText}>{label}</Text>
        {rightIcon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal:responsive.padding(10)
  },
  btn: {
    backgroundColor: colors.primary,
    margin: 30,
    alignSelf: 'flex-start',
  },
  btnText: {
    fontSize: 22,
    color: colors.lightTextColor,
    padding: responsive.padding(15),
  },
});

export default AppButton;
