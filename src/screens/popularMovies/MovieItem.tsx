import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import FastImage from 'react-native-fast-image'
import { IMAGE_BASE_URL } from '../../utils/apiUtils'
import { Movie } from './movies'

const MovieItem = ({movie}: {movie: Movie}) => {
  return (
    <View style={styles.movieItemContainer}>
    <FastImage
      style={styles.movieImage}
      source={{uri: `${IMAGE_BASE_URL}${movie.poster_path}`}}
    />
    <Text style={styles.movieName}>{movie.title}</Text>
  </View>
  )
}

export default MovieItem