import React from 'react'
import styles from './Card.module.css'

const Card = ({ movie }) => {
  const bookShow = () => {
    let url = ''
    for (let key in movie) {
      url += `${key}=${movie[key]}&`
    }
    window.location.assign(`/book-show?${url}`)
  }
  return (
    <div className={styles.Card} onClick={bookShow}>
      <div className='card'>
        <img alt={movie.title} src={movie.image} />
        <h2>{movie.title}</h2>

        <p>
          Ratings: {movie.ratings}
          <br />
          Genre {movie.genre}
          <br />
          Length {movie.length}min
          <br />
          ReleasedDate {movie.releasedDate}
          <br />
          Language {movie.language}
          <br />
          ShowTime {movie.showTime}
          <br />
          Price {movie.price}
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {}

Card.defaultProps = {}

export default Card
