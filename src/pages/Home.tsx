import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/global.css';
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom';
import LiveTrainStatus from '../components/layouts/LiveTrainStatus';

const TrainCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const TrainCard = styled.div`
  background: rgb(59, 117, 232);
  border: 1px solid #000;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  width: 250px;
  box-shadow: 0 0 10px rgb(19, 47, 230);

  &:hover {
    transform: scale(1.05);
  }
`;
const TrainCardHeader = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const TrainCardContent = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;
const SelectContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    margin-top:3rem;
    gap:2rem;
`;
const Select = styled.select`
    padding:4px 8px;
    border:1px solid #000;
    border-radius:8px;
    width:10%;
`;







const Home = () => {
    const navigate = useNavigate()
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [filteredTrains, setFilteredTrains] = useState([]);

  const TrainList = [
    { id: '1', name: 'Train1', from: 'TVM', to: 'Aluva' },
    { id: '2', name: 'Train2', from: 'Delhi', to: 'Mumbai' },
    { id: '3', name: 'Train3', from: 'Bangalore', to: 'Chennai' },
    { id: '4', name: 'Train4', from: 'Hyderabad', to: 'Kolkata' },
    { id: '5', name: 'Train5', from: 'Pune', to: 'Ahmedabad' },
    { id: '6', name: 'Train6', from: 'Delhi', to: 'Jaipur' },
    { id: '7', name: 'Train7', from: 'Chennai', to: 'Trichy' },
    { id: '8', name: 'Train8', from: 'Kolkata', to: 'Patna' },
    { id: '9', name: 'Train9', from: 'Mumbai', to: 'Pune' },
    { id: '10', name: 'Train10', from: 'Ahmedabad', to: 'Mumbai' },
  ];

  const fromOptions = [...new Set(TrainList.map(train => train.from))];
  const toOptions = [...new Set(TrainList.map(train => train.to))];

  const handleSearch = () => {
    const result = TrainList.filter(train =>
      (from === '' || train.from === from) &&
      (to === '' || train.to === to)
    );
    setFilteredTrains(result);
  };

   const handleBooking = (train) => {
    navigate('/booking', { state: { train } });
  };

  const displayTrains = filteredTrains.length > 0 ? filteredTrains : TrainList;

  return (
    <>
      <SelectContainer>
        <Select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value=''>From</option>
          {fromOptions.map((station, idx) => (
            <option key={idx} value={station}>{station}</option>
          ))}
        </Select>

        <Select value={to} onChange={(e) => setTo(e.target.value)} style={{ marginLeft: '10px' }}>
          <option value=''>To</option>

          {toOptions.map((station, idx) => (
            <option key={idx} value={station}>{station}</option>
          ))}

        </Select>

        <Button onClick={handleSearch} style={{ marginLeft: '10px' }} label="Search"/>

        
      </SelectContainer>
      <TrainCardContainer>
        {displayTrains.map((route) => (
          <TrainCard key={route.id}>
            <TrainCardHeader>Train Route {route.id}</TrainCardHeader>
            <TrainCardContent>
              From: {route.from} <br />
              To: {route.to}
            </TrainCardContent>
            <Button onClick={() => handleBooking(route)} label="Book Now"/>
          </TrainCard>
        ))}
      </TrainCardContainer>
      <LiveTrainStatus/>
    </>
  );
};

export default Home;
