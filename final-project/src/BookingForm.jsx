
import React, { useState } from "react";
import "./BookingForm.css";
import { useNavigate } from 'react-router-dom';
import api from './api';

function BookingForm({
  availableTimes,
  dispatch,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [isDateValid, setIsDateValid] = useState(false);
  const [isTimeValid, setIsTimeValid] = useState(false);
  const [isGuestsValid, setIsGuestsValid] = useState(true);

  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    setDate(selectedDate);
    setIsDateValid(selectedDate !== "");

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;

    setTime(selectedTime);
    setIsTimeValid(selectedTime !== "");
  };

  const handleGuestsChange = (e) => {
    const numberOfGuests = Number(e.target.value);

    setGuests(numberOfGuests);
    setIsGuestsValid(
      numberOfGuests >= 1 && numberOfGuests <= 10
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      return;
    }

    if (!isDateValid || !isTimeValid || !isGuestsValid) {
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  };

  const formIsValid =
    isDateValid &&
    isTimeValid &&
    isGuestsValid;

  return (
    <main>
      <section aria-labelledby="booking-heading">
        <h1 id="booking-heading">
          Reserve a Table
        </h1>

        <p>
          Please fill out the form below to make
          your reservation at Little Lemon.
        </p>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Reservation details
            </legend>

            <div>
              <label htmlFor="res-date">
                Choose date
              </label>

              <input
                type="date"
                id="res-date"
                name="date"
                min={today}
                value={date}
                onChange={handleDateChange}
                required
              />
            </div>

            <div>
              <label htmlFor="res-time">
                Choose time
              </label>

              <select
                id="res-time"
                name="time"
                value={time}
                onChange={handleTimeChange}
                required
              >
                <option value="">
                  Select a time
                </option>

                {availableTimes.map((availableTime) => (
                  <option
                    key={availableTime}
                    value={availableTime}
                  >
                    {availableTime}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="guests">
                Number of guests
              </label>

              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                value={guests}
                onChange={handleGuestsChange}
                required
                aria-describedby="guests-help"
              />

              <small id="guests-help">
                Enter a number between 1 and 10.
              </small>
            </div>

            <div>
              <label htmlFor="occasion">
                Occasion
              </label>

              <select
                id="occasion"
                name="occasion"
                value={occasion}
                onChange={(e) =>
                  setOccasion(e.target.value)
                }
              >
                <option value="">
                  Select an occasion
                </option>

                <option value="Birthday">
                  Birthday
                </option>

                <option value="Anniversary">
                  Anniversary
                </option>
              </select>
            </div>
          </fieldset>

          <button
            type="submit"
            aria-label="On Click"
            disabled={!formIsValid}
          >
            Make your reservation
          </button>
        </form>
      </section>
    </main>
  );
}

export default BookingForm;
