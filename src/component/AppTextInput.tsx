import {
  View,
  Text,
  StyleProp,
  TextStyle,
  KeyboardTypeOptions,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {selectLanguage} from '../redux/slices/languageSlice';
import { useAppSelector } from '../redux/store';
import { colors } from '../utils/colors';

interface AppTextInputProps {
  style?: StyleProp<TextStyle> | undefined;
  placeholder?: string | undefined;
  secureTextEntry?: boolean | false;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
}

const AppTextInput = (props: AppTextInputProps) => {
  const local = useAppSelector(selectLanguage);

  return (
    <TextInput
      style={[props.style, styles.textInput,{textAlign:local=='ar'?'right':'left'}]}
      placeholder={props.placeholder}
      placeholderTextColor={colors.gray}
      autoCapitalize={props.autoCapitalize??'none'}
      keyboardType={props.keyboardType}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    padding: 15,
    margin: 10,
    color:colors.primary
  },
});
