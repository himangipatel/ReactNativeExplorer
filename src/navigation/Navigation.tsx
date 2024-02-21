import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../utils/screens';
import SplashScreen from '../screens/SplashScreen';
import {Provider} from 'react-redux';
import {persistor, store} from '../redux/store';
import LoginScreen from '../screens/login/LoginScreen';
import DashboardScreen from '../screens/popularMovies/PopularMoviesScreen';
import {PersistGate} from 'redux-persist/integration/react';

export type RootStackParamList = {
  [screens.splash]: undefined;
  [screens.login]: undefined;
  [screens.popularMovies]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const NAVIGATION_OPTIONS = {
  headerShown: false,
};

const Navigation = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={screens.splash}>
          <Stack.Screen
            name={screens.splash}
            component={SplashScreen}
            options={NAVIGATION_OPTIONS}
          />
          <Stack.Screen
            name={screens.login}
            component={LoginScreen}
            options={NAVIGATION_OPTIONS}
          />
          <Stack.Screen
            name={screens.popularMovies}
            component={DashboardScreen}
            options={NAVIGATION_OPTIONS}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default Navigation;
