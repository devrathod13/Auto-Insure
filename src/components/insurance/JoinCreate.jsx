import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import styled from 'styled-components';

function User() {
  const [vehicleModel, setVehicleModel] = useState('');
  const [cubicCapacity, setCubicCapacity] = useState('');
  const [premium, setPremium] = useState('');
  const [poolId, setPoolId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pools, setPools] = useState([]);
  const [poolCreated, setPoolCreated] = useState(false);

  const contractAddress = '0xC3Ba5050Ec45990f76474163c5bA673c244aaECA'; // Update with your contract address

  useEffect(() => {
    const checkUserAccount = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
      } else {
        setError('Ethereum wallet not found. Please install MetaMask.');
      }
    };
    checkUserAccount();
  }, []);

  const generatePoolId = () => {
    // Generate a 5-digit pool ID
    return Math.floor(10000 + Math.random() * 90000).toString();
  };

  const createPool = async () => {
    setLoading(true);
    setError('');
    try {
      if (!vehicleModel || !cubicCapacity || !premium) {
        setError('Please fill in all the pool details');
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, [
        'function createPool(string vehicleModel, uint256 cubicCapacity, uint256 premium) public'
      ], signer);

      const tx = await contract.createPool(vehicleModel, cubicCapacity, ethers.utils.parseEther(premium));
      await tx.wait();

      const generatedPoolId = generatePoolId();
      const newPool = {
        poolId: generatedPoolId,
        vehicleModel,
        cubicCapacity,
        premium
      };

      setPools(prevPools => [...prevPools, newPool]);
      setPoolCreated(true);
      setPoolId(generatedPoolId);
      alert(`Pool Created Successfully! Pool ID: ${generatedPoolId}`);
    } catch (err) {
      setError('Error creating pool: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const joinPool = async () => {
    setLoading(true);
    setError('');
    try {
      if (!poolId) {
        setError('Please provide a valid pool ID');
        return;
      }

      const poolExists = pools.some(pool => pool.poolId === poolId);
      if (!poolExists) {
        setError('Pool ID does not exist');
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ['function joinPool(uint256 poolId) public'], signer);

      const tx = await contract.joinPool(poolId);
      await tx.wait();

      alert('Successfully joined pool!');
    } catch (err) {
      setError('Error joining pool: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Main>
        {loading && <LoadingText>Loading...</LoadingText>}
        {error && <ErrorText>{error}</ErrorText>}

        <FlexContainer>
          <FormContainer>
            <FormTitle>Create Pool</FormTitle>
            <Input
              type="text"
              placeholder="Vehicle Model"
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Cubic Capacity"
              value={cubicCapacity}
              onChange={(e) => setCubicCapacity(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Premium (ETH)"
              value={premium}
              onChange={(e) => setPremium(e.target.value)}
            />
            <Button
              disabled={loading || poolCreated}
              onClick={createPool}
              created={poolCreated}
            >
              Create Pool
            </Button>
          </FormContainer>

          {pools.length > 0 && (
            <PoolListContainer>
              <h3>Created Pools:</h3>
              {pools.map((pool, index) => (
                <PoolDetailsContainer key={index}>
                  <p><strong>Pool ID:</strong> {pool.poolId}</p>
                  <p><strong>Vehicle Model:</strong> {pool.vehicleModel}</p>
                  <p><strong>Cubic Capacity:</strong> {pool.cubicCapacity}</p>
                  <p><strong>Premium (ETH):</strong> {pool.premium}</p>
                </PoolDetailsContainer>
              ))}
            </PoolListContainer>
          )}
        </FlexContainer>

        <FormContainer>
          <FormTitle>Join Pool</FormTitle>
          <Input
            type="number"
            placeholder="Pool ID"
            value={poolId}
            onChange={(e) => setPoolId(e.target.value)}
          />
          <Button disabled={loading} onClick={joinPool}>
            Join Pool
          </Button>
        </FormContainer>
      </Main>
    </Container>
  );
}

export default User;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 12px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 320px;
  font-size: 16px;
  background-color: #fafafa;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: ${({ created }) => (created ? '#ccc' : '#4CAF50')};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: ${({ created }) => (created ? 'not-allowed' : 'pointer')};
  width: 100%;
  max-width: 320px;
  margin-top: 10px;

  &:hover {
    background-color: ${({ created }) => (created ? '#ccc' : '#45a049')};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const LoadingText = styled.div`
  color: #333;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  &:before {
    content: '';
    border: 4px solid #f3f3f3;
    border-top: 4px solid #4caf50;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
    margin-right: 10px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ErrorText = styled.p`
  color: #f44336;
  font-size: 14px;
  margin: 10px 0;
  font-weight: 500;
`;

const PoolListContainer = styled.div`
  width: 45%;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #333;
  }
`;

const PoolDetailsContainer = styled.div`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fafafa;
`;
