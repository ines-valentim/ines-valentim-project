import React, { useReducer } from "react";
import {Routes, Route} from "react-router-dom";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmBooking";
import { fetchData, submitAPI } from "./api";
import { render } from 'testing-library/react';
import BookingForm from './components/BookingForm';

const initializeTimes = () => {
    const today = new Date();
  return fetchData(today);
};

const updateTimes = (state, action) => {
  // For now, return the same available times
  // regardless of the selected date.
  return fetchData(action.date);
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        }
      />

      <Route
        path="/confirmed"
        element={<ConfirmedBooking />}
      />
    </Routes>
  );
}

export default Main;

test('renders booking form', () => {
  render(<BookingForm />);
});