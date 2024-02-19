import {View, Text, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigation';
import {styles} from './style';
import AppTextInput from '../../component/AppTextInput';
import AppButton from '../../component/AppButton';
import useValidateEmailPass from '../../hooks/useValidateIDPass';
import {colors} from '../../utils/colors';
import useLocalize from '../../hooks/useLocalize';
import {screens} from '../../utils/screens';
import {Language, setLanguage} from '../../redux/slices/languageSlice';
import ArrowRight from '../../assets/arrow.svg';
import {TRANSLATION_KEYS} from '../../utils/translations';
import responsive from '../../utils/responsive';
import {useAppDispatch} from '../../redux/store';
import {AppStatusBar} from '../../component/StatusBar';
import useLogin from '../../hooks/useLogin';

interface LoginProps {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

const LoginScreen = ({navigation}: LoginProps) => {
  const dispatch = useAppDispatch();
  const {translate, local} = useLocalize();
  const translateY = useRef(new Animated.Value(300)).current;
  const {adduser} = useLogin();

  const {
    isValidEmail,
    email,
    validateEmail,
    validatePassword,
    isValidPassword,
    password,
  } = useValidateEmailPass();

  const handleLanguageChange = (language: string) => {
    dispatch(setLanguage(language));
    navigation.replace(screens.splash);
  };

  const isValidData = isValidEmail && isValidPassword;

  const handleLogin = () => {
    adduser(email, password);
    navigation.replace(screens.popularMovies);
  };

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const rightButton = () => (
    <ArrowRight
      width={24}
      height={24}
      fill={'red'}
      style={{paddingHorizontal: 20}}
    />
  );

  return (
    <View style={styles.container}>
      <AppStatusBar />
      <View style={styles.topContainer}>
        <View style={styles.languageContainer}>
          <Text
            onPress={() => handleLanguageChange(Language.ENGLISH)}
            style={[
              styles.smallText,
              local == Language.ARABIC ? styles.inActive : styles.active,
            ]}>
            {translate(TRANSLATION_KEYS.ENGLISH)}
          </Text>
          <View style={{width: responsive.pWidth(10)}} />
          <Text
            onPress={() => handleLanguageChange(Language.ARABIC)}
            style={[
              styles.smallText,
              local == Language.ARABIC ? styles.active : styles.inActive,
            ]}>
            {translate(TRANSLATION_KEYS.ARABIC)}
          </Text>
        </View>
        <Animated.View
          style={[styles.topAnimatedView, {transform: [{translateY}]}]}>
          <Text style={styles.smallText}>
            {translate(TRANSLATION_KEYS.APP_TITLE)}
          </Text>
          <Text style={[styles.smallText, styles.loginText]}>
            {translate(TRANSLATION_KEYS.LOGIN_TITLE)}
          </Text>
        </Animated.View>
      </View>

      <View style={styles.bottomContainer}>
        <Animated.View style={{transform: [{translateY}]}}>
          <AppTextInput
            placeholder={translate(TRANSLATION_KEYS.ENTER_EMAIL)}
            keyboardType="email-address"
            value={email}
            onChangeText={text => validateEmail(text)}
            showError={!isValidEmail}
            errorMessage={translate(TRANSLATION_KEYS.ENTER_VALID_EMAIL)}
          />

          <AppTextInput
            secureTextEntry
            placeholder={translate(TRANSLATION_KEYS.ENTER_PASSWORD)}
            value={password}
            onChangeText={text => validatePassword(text)}
            showError={!isValidPassword}
            errorMessage={translate(TRANSLATION_KEYS.ENTER_VALID_PASSWORD)}
          />
        </Animated.View>

        <AppButton
          label={translate(TRANSLATION_KEYS.SIGN_IN)}
          rightIcon={rightButton()}
          disable={!isValidData}
          style={{
            backgroundColor: isValidData ? colors.primary : colors.buttonBg,
          }}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
