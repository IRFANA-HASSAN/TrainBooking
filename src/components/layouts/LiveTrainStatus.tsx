import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const trainStatusData = {
  '1001': {
    position: 'Central Station',
    nextStation: 'Park Street',
    route: ['Central Station', 'Park Street', 'North End'],
  },
  '1002': {
    position: 'East Side',
    nextStation: 'Riverbank',
    route: ['East Side', 'Riverbank', 'Hilltop'],
  },
  '1003': {
    position: 'West Point',
    nextStation: 'Sunset Blvd',
    route: ['West Point', 'Sunset Blvd', 'Airport'],
  },
};

const trains = [
  { number: '1001', name: 'Morning Express' },
  { number: '1002', name: 'City Connector' },
  { number: '1003', name: 'Airport Shuttle' },
];


function TrainLiveStatus() {
  const [selectedTrain, setSelectedTrain] = useState('');
  const [status, setStatus] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 


  function fetchTrainStatus(trainNumber) {
    setLoading(true);
    setError('');
    setStatus(null);



    setTimeout(() => {
      const data = trainStatusData[trainNumber];
      if (data) {
        setStatus(data);  
      } else {
        setError('Train data not found'); 
      }
      setLoading(false);
    }, 1000); 
  }


  useEffect(() => {
    if (selectedTrain) {
      fetchTrainStatus(selectedTrain);
    } else {
      setStatus(null);
      setError('');
    }
  }, [selectedTrain]);


  return (
    <Container>
      <Title>Train Live Status</Title>

      <label htmlFor="train-select" style={{ fontWeight: 'bold' }}>
        Select a Train:
      </label>

      <select
        id="train-select"
        value={selectedTrain}
        onChange={(e) => setSelectedTrain(e.target.value)}
        style={{ marginLeft: 10, padding: 5, fontSize: 16 }}
      >
        <option value="">-- Choose a train --</option>
        {trains.map((train) => (
          <option key={train.number} value={train.number}>
            {train.name} ({train.number})
          </option>
        ))}

      </select>

      <Card style={{ marginTop: 20 }}>

        {loading && <p>Loading live status...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {status && (
          <Cardstyle>
            <h2>Status for {trains.find(t => t.number === selectedTrain)?.name}</h2>
            <p><strong>Current Position:</strong> {status.position}</p>
            <p><strong>Next Station:</strong> {status.nextStation}</p>
            <p><strong>Route:</strong> {status.route.join(' → ')}</p>
          </Cardstyle>
        )}
      </Card>
    </Container>
  );
}

export default TrainLiveStatus;



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
    transform: scale(1.01);
    }
`;
const Title =styled.h1`
    font-size: 28px;
    font-weight:700;
    margin-bottom:1rem;
`;
const Cardstyle = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
`;