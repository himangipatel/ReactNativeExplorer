import {
  View,
  Text,
  StyleProp,
  TextStyle,
  KeyboardTypeOptions,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {selectLanguage} from '../redux/slices/languageSlice';
import {useAppSelector} from '../redux/store';
import {colors} from '../utils/colors';
import useLocalize from '../hooks/useLocalize';

interface AppTextInputProps {
  style?: StyleProp<TextStyle> | undefined;
  placeholder?: string | undefined;
  secureTextEntry?: boolean | false;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  value?: string | '';
  onChangeText?: ((text: string) => void) | undefined;
  showError?: boolean | false;
  errorMessage?: string | '';
  testID?:string|''
}

const AppTextInput = (props: AppTextInputProps) => {
  const {local} = useLocalize()
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (isFocused: boolean) => {
    setIsFocused(isFocused);
  };

  const isUserStartTyping = () =>
    props.value == undefined ? false : props.value.length == 0 ? false : true;

  return (
    <View>
      <TextInput
      testID={props.testID}
        style={[
          props.style,
          styles.textInput,
          {textAlign: local == 'ar' ? 'right' : 'left'},
        ]}
        placeholder={props.placeholder}
        placeholderTextColor={colors.gray}
        autoCapitalize={props.autoCapitalize ?? 'none'}
        keyboardType={props.keyboardType}
        value={props.value}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
      />
      {isFocused && props.showError && isUserStartTyping() && (
        <Text style={styles.errorText}>{props.errorMessage}</Text>
      )}
    </View>
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
    color: colors.primary,
  },
  errorText: {
    color: 'red',
    marginStart: 10,
    marginBottom: 10,
  },
});
