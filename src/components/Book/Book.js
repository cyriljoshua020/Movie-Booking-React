import React, { useState } from 'react'
// import axios from 'axios'
import styles from './Book.module.css'

const Book = () => {
  const search = window.location?.search ?? ''
  const params = new URLSearchParams(search)
  const price = params.get('price')
  const movieId = params.get('id')
  const [totalPrice, setTotalPrice] = useState(params.get('price'))
  const [bookingMsg, setBookingMsg] = useState('');
  const [paymentForm, setPaymentForm] = useState({
    email: '',
    phone: '',
    seat: 1
  })
  const { seat, email, phone } = paymentForm
  const handleOnChange = (e) => {
    const {
      target: { value, name }
    } = e
    setPaymentForm({
      ...paymentForm,
      [name]: value
    })
    name === 'seat' && setTotalPrice(price * value)
  }

  const handleOnSubmit = () => {
    // setPaymentForm({
    //   email: '',
    //   phone: '',
    //   seat: 1
    // })
    // const submittedData = { ...paymentForm, movieId, paid: totalPrice }
    // alert(`Booking details submitted ${JSON.stringify(submittedData)}`)


    // setBookingMsg("Your booking is confirmed, Please be on time");
    setBookingMsg("Your booking failed, please try again");

  }

  return (
    <div className={styles.Book}>
      <h3>Book Show</h3>

      <p className='bookingStatus'>{bookingMsg}</p>

      <fieldset>
        <legend>Details</legend>
        <div>
          <label>Phone</label>
        </div>
        <div>
          <input
            type='text'
            id='phone'
            name='phone'
            value={phone == null ? '' : phone}
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            type='email'
            id='email'
            name='email'
            value={email == null ? '' : email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label>Seat</label>
        </div>
        <div>
          <input
            type='number'
            id='seat'
            name='seat'
            value={seat == null ? '' : seat}
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label>Price (Per Seat)</label>
        </div>
        <div>
          <input
            type='number'
            id='price'
            name='price'
            value={price == null ? '' : price}
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label>Price (Total)</label>
        </div>
        <div>
          <input
            type='number'
            id='totalPrice'
            name='totalPrice'
            value={totalPrice == null ? '' : totalPrice}
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <input id='submit'  type='button' value={'Submit'} onClick={handleOnSubmit} />
        </div>
      </fieldset>
    </div>
  )
}

export default Book
