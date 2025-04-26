import React from 'react'
import styles from './Movies.module.css'
import { db } from '../../data-source/movie-db'
import Card from '../Card/Card'

const Movies = () => {
  const { movies } = db

  return (
    <div className={styles.Movies}>
      <h3>Movies</h3>
      {movies.map((item) => (
        <Card key={item.title+item.id} movie={item} />
      ))}
    </div>
  )
}

export default Movies
