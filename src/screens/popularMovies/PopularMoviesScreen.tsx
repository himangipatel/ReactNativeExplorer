import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Movie} from './movies';
import withLoader from '../../hoc/withLoader';
import {styles} from './styles';
import {logout} from '../../redux/slices/authSlice';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigation';
import {screens} from '../../utils/screens';
import responsive from '../../utils/responsive';
import Logout from '../../assets/logout.svg';
import useLocalize from '../../hooks/useLocalize';
import {TRANSLATION_KEYS} from '../../utils/translations';
import {useAppDispatch} from '../../redux/store';
import {AppStatusBar} from '../../component/StatusBar';
import Loader from '../../component/Loader';
import MovieItem from './MovieItem';
import { useGetMoviesQuery } from '../../redux/slices/movieSlice';


interface PopularMovieProps {
  navigation: StackNavigationProp<RootStackParamList, 'PopularMovies'>;
  startLoader: () => void;
  dismissLoader: () => void;
}

const PopularMoviesComponent = ({
  navigation,
  startLoader,
  dismissLoader,
}: PopularMovieProps) => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const {translate} = useLocalize();
  const {local} = useLocalize()

  const {data, error, isLoading, isError} = useGetMoviesQuery({
    page: currentPage,
    local:local,
  });

  useEffect(() => {
    if (data != undefined) {
      setMovies(movies.concat(data));
    }
    if (isLoading) startLoader();
    else dismissLoader();
    setIsLoadMore(false);
  }, [data, isLoading]);


  const handleLoadMore = () => {
    setIsLoadMore(true);
    setCurrentPage(currentPage + 1);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigation.replace(screens.login);
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar />
      {isError && <Text>{JSON.stringify(error)}</Text>}
      {movies && (
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
            data={movies}
            renderItem={({item}) => <MovieItem movie={item} />}
            onEndReached={handleLoadMore}
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
