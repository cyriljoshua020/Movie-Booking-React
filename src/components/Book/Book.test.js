import React from 'react'
import { shallow } from 'enzyme'
import Book from './Book'
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';
import { db } from '../../data-source/movie-db'


let boundaryTestName = `BookComponentTest boundary`
let functionalTestName = `BookComponentTest functional`

describe('<Book />', () => {
  let component

    beforeEach(() => {
      component = render(<Book />)
    })

    it(boundaryTestName+' should mount Book without crashing', () => {
      component = shallow(<Book />)
      expect(component.length).toBe(1)
    })

    it(functionalTestName+' should contain email default value as empty string', () => {
      let emailElement = component.container.querySelector(`input[id='email']`);

      expect(emailElement).toBeDefined();
      expect(emailElement.value).toEqual('');
    })

    it(functionalTestName+' should contain email as a required field', () => {
      let emailElement = component.container.querySelector(`input[id='email']`);

      expect(emailElement.hasAttributes('required')).toBe(true);
    })

    it(functionalTestName+' should contain phone default value as empty string', () => {
      let phoneElement = component.container.querySelector(`input[id='phone']`);

      expect(phoneElement).toBeDefined();
      expect(phoneElement.value).toEqual('');
    })

    it(functionalTestName+' should contain phone as a required field', () => {
      let phoneElement = component.container.querySelector(`input[id='phone']`);

      expect(phoneElement.hasAttributes('required')).toBe(true);
    })


    it(functionalTestName+' should contain seat default value as 1', () => {
      let seatElement = component.container.querySelector(`input[id='seat']`);

      expect(seatElement).toBeDefined();
      expect(seatElement.value).toEqual("1");
    })

    it(functionalTestName+' should show success message after ticket booking', () => {
      expect(component.container.innerHTML).not.toContain("Your booking is confirmed, Please be on time");

      component.container.querySelector(`input[id='seat']`).value = "2";
      component.container.querySelector(`input[id='phone']`).value= "8989898989"
      component.container.querySelector(`input[id='email']`).value="abc@gmail.com";
      component.container.querySelector(`input[id='price']`).value=db.movies[0].price;
      component.container.querySelector(`input[id='totalPrice']`).value = db.movies[0].price * component.container.querySelector(`input[id='seat']`).value;

      fireEvent.click(component.container.querySelector(`input[id='submit']`));

      expect(component.container.innerHTML).toContain("Your booking is confirmed, Please be on time");
    })

    it(functionalTestName+' should show error message when booking ticket without email', () => {
      expect(component.container.innerHTML).not.toContain("Your booking is confirmed, Please be on time");

      component.container.querySelector(`input[id='seat']`).value = "2";
      component.container.querySelector(`input[id='phone']`).value= "8989898989"
      component.container.querySelector(`input[id='price']`).value=db.movies[0].price;
      component.container.querySelector(`input[id='totalPrice']`).value = db.movies[0].price * component.container.querySelector(`input[id='seat']`).value;

      fireEvent.click(component.container.querySelector(`input[id='submit']`));

      expect(component.container.innerHTML).toContain("Your booking failed, please try again");
    })

    it(functionalTestName+' should show error message when booking ticket without phone', () => {
      expect(component.container.innerHTML).not.toContain("Your booking is confirmed, Please be on time");

      component.container.querySelector(`input[id='seat']`).value = "2";
      component.container.querySelector(`input[id='email']`).value="abc@gmail.com";
      component.container.querySelector(`input[id='price']`).value=db.movies[0].price;
      component.container.querySelector(`input[id='totalPrice']`).value = db.movies[0].price * component.container.querySelector(`input[id='seat']`).value;

      fireEvent.click(component.container.querySelector(`input[id='submit']`));

      expect(component.container.innerHTML).toContain("Your booking failed, please try again");
    })

    it(functionalTestName+' should show error message when booking ticket without seat number', () => {
      expect(component.container.innerHTML).not.toContain("Your booking is confirmed, Please be on time");

      component.container.querySelector(`input[id='seat']`).value = "0";
      component.container.querySelector(`input[id='email']`).value="abc@gmail.com";
      component.container.querySelector(`input[id='price']`).value=db.movies[0].price;
      component.container.querySelector(`input[id='totalPrice']`).value = db.movies[0].price * component.container.querySelector(`input[id='seat']`).value;

      fireEvent.click(component.container.querySelector(`input[id='submit']`));

      expect(component.container.innerHTML).toContain("Your booking failed, please try again");
    })

})
