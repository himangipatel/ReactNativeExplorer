import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import LottieView from 'lottie-react-native';
import {images} from '../utils/images';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigation';
import {screens} from '../utils/screens';
import {selectUser} from '../redux/slices/authSlice';
import {selectLanguage} from '../redux/slices/languageSlice';
import useLocalize from '../hooks/useLocalize';
import {useAppSelector} from '../redux/store';
import {colors} from '../utils/colors';
import responsive from '../utils/responsive';

interface SplashProps {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
}

const SplashScreen = ({navigation}: SplashProps) => {
  const isLoggedIn = useAppSelector(selectUser);
  const local = useAppSelector(selectLanguage);
  const {setI18nConfig} = useLocalize();

  const navigateToNextScreen = () => {
    navigation.replace(
      isLoggedIn == null ? screens.login : screens.popularMovies,
      {local: local},
    );
  };
  useEffect(() => {
    setTimeout(() => {
      setI18nConfig(local);
      navigateToNextScreen()
    }, 1000);
  }, [isLoggedIn]);

  return (
    <View style={styles.container}>
      <LottieView
        source={images.landingAnimation}
        style={styles.splashView}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.primary},
  splashView: {width: responsive.pWidth(100), height: responsive.pHeight(100)},
});

export default SplashScreen;
