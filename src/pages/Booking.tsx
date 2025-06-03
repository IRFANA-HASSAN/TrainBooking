import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import styled from 'styled-components';

const Booking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [seat, setSeat] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  if (!state?.train) {
    return (
      <p>
        No train selected. Go back to <a href="/">home</a>.
      </p>
    );
  }

  const { train } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    const newBooking = {
      trainName: train.name,
      from: train.from,
      to: train.to,
      passenger: name,
      seat: seat,
      paymentMethod: paymentMethod,
    };

    const stored = JSON.parse(localStorage.getItem('bookings') || '[]');
    stored.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(stored));

    navigate('/confirmation');
  };

  return (
    <Container>
      <Title>Booking for {train.name}</Title>
      <P>
        <strong>From:</strong> {train.from} <br />
        <strong>To:</strong> {train.to}
      </P>

      <Form onSubmit={handleSubmit}>
        <CardInput>
          <Label>Name:</Label>
          <br />
          <Input type="text"  value={name}  onChange={(e) => setName(e.target.value)}  required />
        </CardInput>

        <CardInput style={{ marginTop: '10px' }}>
          <Label>Seat Number:</Label>
          <br />
          <Input type="text"  value={seat} onChange={(e) => setSeat(e.target.value)}  required  />
        </CardInput>

        <CardInput style={{ marginTop: '10px' }}>
          <Label>Payment Method:</Label>
          <br />
          <Select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required >
            <option value="">--Select Payment--</option>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Net Banking</option>
          </Select>
        </CardInput>

        <Button type="submit" style={{ marginTop: '20px' }} label="Pay & Confirm" />
      </Form>
    </Container>
  );
};

export default Booking;

const Container = styled.div`
  padding: 20px;
  max-width: 500px;
  margin: auto;
  border: 1px solid #000;
  border-radius: 8px;
  margin-top: 8rem;
  background: rgba(61, 126, 248, 0.6);
`;
const Title = styled.h1`
  font-size: 28px;
  color: #000;
`;
const P = styled.p`
  color: rgb(7, 27, 52);
  font-size: 16px;
  margin: 1rem;
`;
const Form = styled.form`
  background: rgba(53, 89, 219, 0);
`;
const CardInput = styled.div`
  background: rgba(53, 89, 219, 0);
`;
const Input = styled.input`
  border: 1px solid #000;
  border-radius: 8px;
  padding: 4px;
  width: 80%;
  margin-bottom: 1rem;
  background: rgba(53, 89, 219, 0);
`;
const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;
const Select = styled.select`
  border: 1px solid #000;
  border-radius: 8px;
  padding: 4px;
  width: 84%;
  margin-bottom: 1rem;
  background: rgba(53, 89, 219, 0);
`;
