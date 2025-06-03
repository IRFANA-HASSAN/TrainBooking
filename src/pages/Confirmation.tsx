import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Confirmation = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(stored);
  }, []);

  if (bookings.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>No Bookings Found</h2>
        <Link to="/">Go Back Home</Link>
      </div>
    );
  }



  return (
    <Container style={{  }}>
      <Title>All Confirmed Bookings</Title>
      {bookings.map((booking, index) => (
        <Card key={index}>
          <p><strong>Train:</strong> {booking.trainName}</p>
          <p><strong>From:</strong> {booking.from}</p>
          <p><strong>To:</strong> {booking.to}</p>
          <p><strong>Passenger:</strong> {booking.passenger}</p>
          <p><strong>Seat:</strong> {booking.seat}</p>
        </Card>
      ))}
      <Link to="/" style={{ marginTop: '20px', display: 'inline-block' }}>
        Book Another Ticket
      </Link>
    </Container>
  );
};

export default Confirmation;


const Container = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: auto;
`;
const Card = styled.div`
    box-shadow: 0px 2px 4px rgb(9, 104, 255);
    border-radius:8px;
    padding: 15px;
    margin-bottom: 10px;
    background:rgba(59, 137, 255, 0.71);

    &:hover{
    border:1px solid rgb(8, 41, 255);
    }
`;
const Title =styled.h1`
    font-size: 28px;
    font-weight:700;
    margin-bottom:1rem;
`;