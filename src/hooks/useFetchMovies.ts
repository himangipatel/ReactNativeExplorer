import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {saveEmailPassword} from '../redux/slices/authSlice';
import {useEffect, useState} from 'react';
import {Movie} from '../screens/popularMovies/movies';
import {useGetMoviesQuery} from '../redux/slices/movieSlice';
import useLocalize from './useLocalize';

const useFetchMovies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const {local} = useLocalize();
  const [isLoadMore, setIsLoadMore] = useState(false);

  const {data, error, isLoading, isError} = useGetMoviesQuery({
    page: page,
    local: local,
  });

  const loadMore = ()=>{
    setIsLoadMore(true)
    setPage(page+1)
  }

  useEffect(() => {
    setIsLoadMore(false)
    if (data) {
      setMovies(movies.concat(data));
    }
  }, [data]);



  return { data: movies, isLoading, isError,isLoadMore,error,loadMore,page};
};

export default useFetchMovies;
