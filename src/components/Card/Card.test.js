import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';

describe('boundary', () => {
      describe('Card component', () => {
    let component;
    let movie;

    beforeEach(() => {
      movie = {
        id: 123,
        title: 'Iron man',
        image:
          'https://i.picsum.photos/id/650/300/200.jpg?hmac=nuRnzrByBYKU6fsTl1xwz3MIpNrNjb0PjLJA5ypiOqU',
        ratings: 4.4,
        genre: 'fantasy',
        length: 114,
        releasedDate: '31/07/1986',
        language: 'Punjabi',
        showTime: '17:40',
        price: 320,
        available: true
      }
      component = shallow(<Card movie={movie} />);
    });

    it('should mount', () => {
      expect(component.length).toBe(1);
      expect(component).toBeTruthy();
    });


    it(`should render movie image`, async() => {
      component = render(<Card movie={movie} />);

      expect(component.container.querySelector('img').src).toBe(movie.image);
    });

    it(`should render movie title`, async() => {
      component = render(<Card movie={movie} />);

      expect(component).toBeDefined();
      expect(component.container).toBeDefined();
      expect(component.container.innerHTML).toContain(movie.title);

    });

    it(`should render movie director`, async() => {
      component = render(<Card movie={movie} />);

      expect(component).toBeDefined();
      expect(component.container).toBeDefined();
      expect(component.container.innerHTML).toContain(movie.ratings);
    });
  });
});
