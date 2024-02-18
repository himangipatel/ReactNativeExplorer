import {View, Text} from 'react-native';
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

interface SplashProps {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
}

const SplashScreen = ({navigation}: SplashProps) => {
  const isLoggedIn = useAppSelector(selectUser);
  const local = useAppSelector(selectLanguage);
  const {setI18nConfig} = useLocalize();

  useEffect(() => {
    setTimeout(() => {
      setI18nConfig(local);
      navigation.replace(
        isLoggedIn == null ? screens.login : screens.popularMovies,
        {local: local},
      );
    }, 1000);
  }, []);
  return (
    <View style={{backgroundColor: 'black'}}>
      <LottieView
        source={images.landingAnimation}
        style={{width: '100%', height: '100%'}}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;
