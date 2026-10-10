import React from "react";
import BookingForm from "./components/BookingForm";

function BookingPage() {
  return (
    <main>
      <section>
        <h1>Reserve a Table</h1>
        <p>
          Book a table at Little Lemon and enjoy a delicious Mediterranean
          dining experience.
        </p>

        <BookingForm />
      </section>
    </main>
  );
}

export default BookingPage;