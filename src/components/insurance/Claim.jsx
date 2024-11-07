import React, { useState } from 'react';
import { ethers } from 'ethers';
import styled from 'styled-components';

const contractAddress = '0xC3Ba5050Ec45990f76474163c5bA673c244aaECA'; // Update with your contract address

function Claim() {
  const [poolId, setPoolId] = useState('');
  const [claimAmount, setClaimAmount] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  
  const handleClaimRequest = async () => {
    if (!poolId || !claimAmount) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, [
        'function requestClaim(uint256 poolId, uint256 amount) public',
      ], signer);

      const tx = await contract.requestClaim(poolId, ethers.utils.parseEther(claimAmount));
      await tx.wait();
      setSuccess(`Claim successfully requested for ${claimAmount} ETH in Pool ID ${poolId}.`);
    } catch (err) {
      setError('Error requesting claim: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Request Claim</Title>
        {error && <ErrorText>{error}</ErrorText>}
        {success && <SuccessText>{success}</SuccessText>}
        
        <Input
          type="text"
          placeholder="Pool ID"
          value={poolId}
          onChange={(e) => setPoolId(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Claim Amount (ETH)"
          value={claimAmount}
          onChange={(e) => setClaimAmount(e.target.value)}
        />
        <Button onClick={handleClaimRequest} disabled={loading}>
          {loading ? 'Processing...' : 'Request Claim'}
        </Button>
      </FormContainer>
    </Container>
  );
}

export default Claim;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  padding: 0 20px;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
`;

const ErrorText = styled.p`
  color: #f44336;
  font-size: 14px;
  margin: 10px 0;
  font-weight: 500;
`;

const SuccessText = styled.p`
  color: #4caf50;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

const Input = styled.input`
  padding: 14px 18px;
  margin: 12px 0;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  max-width: 320px;
  box-sizing: border-box;
  background-color: #fafafa;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4caf50;
    outline: none;
    background-color: #fff;
  }
`;

const Button = styled.button`
  padding: 14px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 320px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #388e3c;
    transform: translateY(2px);
  }
`;
