import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
// import {useGetMoviesQuery} from '../../redux/slices/movieSlice';
import {Movie} from './movies';
import withLoader from '../../hoc/withLoader';
import {IMAGE_BASE_URL} from '../../utils/apiUtils';
import {styles} from './styles';
import {logout} from '../../redux/slices/authSlice';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigation';
import {screens} from '../../utils/screens';
import {selectLanguage} from '../../redux/slices/languageSlice';
import LottieView from 'lottie-react-native';
import {images} from '../../utils/images';
import responsive from '../../utils/responsive';
import Logout from '../../assets/logout.svg';
import useLocalize from '../../hooks/useLocalize';
import {TRANSLATION_KEYS} from '../../utils/translations';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {RouteProp} from '@react-navigation/native';
import {AppStatusBar} from '../../component/StatusBar';
import Loader from '../../component/Loader';
import FastImage from 'react-native-fast-image';
import MovieItem from './MovieItem';
import { useGetMoviesQuery } from '../../redux/slices/movieSlice';

type PopularMovieScreenRouteProp = RouteProp<
  RootStackParamList,
  'PopularMovies'
>;

interface PopularMovieProps {
  navigation: StackNavigationProp<RootStackParamList, 'PopularMovies'>;
  route: PopularMovieScreenRouteProp;
  startLoader: () => void;
  dismissLoader: () => void;
}

const PopularMoviesComponent = ({
  navigation,
  route,
  startLoader,
  dismissLoader,
}: PopularMovieProps) => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const {translate} = useLocalize();

  const {data, error, isLoading, isError} = useGetMoviesQuery({
    page: currentPage,
    local: route.params.local,
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
    navigation.replace(screens.login, route.params);
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
