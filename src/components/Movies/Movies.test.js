import React from 'react'
import { shallow } from 'enzyme'
import Movies from './Movies'
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';

import { db } from '../../data-source/movie-db'

let testName = `MoviesComponentTest boundary`

describe('boundary', () => {
    let component

    beforeEach(() => {
      component = shallow(<Movies />)
    })

    it(testName+' should mount', () => {
      expect(component.length).toBe(1)
    })

    it(testName+' should render movie image', () => {
      expect(screen.findByText(db.movies[0].image)).toBeTruthy();
    })

    it(testName+' should render movie genre', () => {
      expect(screen.findByText(db.movies[0].genre)).toBeTruthy();
    })

    it(testName+' should render movie title', () => {
      expect(screen.findByText(db.movies[0].title)).toBeTruthy();
    })

    it(testName+' should render movie language', () => {
      expect(screen.findByText(db.movies[0].language)).toBeTruthy();
    })

    it(testName+' should render movie length', () => {
      expect(screen.findByText(db.movies[0].length)).toBeTruthy();
    })

    it(testName+' should render movie price', () => {
      expect(screen.findByText(db.movies[0].price)).toBeTruthy();
    })

    it(testName+' should render movie rating', () => {
      expect(screen.findByText(db.movies[0].rating)).toBeTruthy();
    })

    it(testName+' should render movie released date', () => {
      expect(screen.findByText(db.movies[0].releasedDate)).toBeTruthy();
    })

    it(testName+' should render movie show time', () => {
      expect(screen.findByText(db.movies[0].showTime)).toBeTruthy();
    })
})
