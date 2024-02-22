import React, {useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import withLoader from '../../hoc/withLoader';
import {styles} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigation';
import {screens} from '../../utils/screens';
import responsive from '../../utils/responsive';
import Logout from '../../assets/logout.svg';
import useLocalize from '../../hooks/useLocalize';
import {TRANSLATION_KEYS} from '../../utils/translations';
import {AppStatusBar} from '../../component/StatusBar';
import Loader from '../../component/Loader';
import MovieItem from './MovieItem';
import useFetchMovies from '../../hooks/useFetchMovies';
import useLogin from '../../hooks/useLogin';

interface PopularMovieProps {
  navigation: StackNavigationProp<RootStackParamList, 'PopularMovies'>;
  showLoader: (isVisible: boolean) => void;
}

const PopularMoviesComponent = ({
  navigation,
  showLoader,
}: PopularMovieProps) => {
  const {translate} = useLocalize();
  const {logout} = useLogin();
  const {data, isError, error, loadMore, isLoadMore, isLoading} =
    useFetchMovies();

  useEffect(() => {
    showLoader(isLoading);
  }, [isLoading]);

  const handleLogout = () => {
    logout();
    navigation.replace(screens.login);
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar />
      {isError && <Text>{JSON.stringify(error)}</Text>}
      {data && (
        <>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>
              {translate(TRANSLATION_KEYS.MOST_POPULAR)}
            </Text>
            <Logout
              width={responsive.width(24)}
              height={responsive.width(24)}
              onPress={handleLogout}
            />
          </View>
          <FlatList
            data={data}
            renderItem={({item}) => <MovieItem movie={item} />}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            numColumns={2}
            contentContainerStyle={styles.container}
            ListFooterComponent={isLoadMore ? <Loader /> : null}
            keyExtractor={item => `${item.id.toString()}${Math.random()}`}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default withLoader(PopularMoviesComponent);
