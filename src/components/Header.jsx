import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ConnectKitButton } from "connectkit";
import { useAccount } from 'wagmi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const { address } = useAccount();
  const [isConnected, setConnected] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 910);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const takeInsuranceHandler = () => {
    window.scroll({
      top: 926,
      behavior: 'smooth'
    });
  };

  return (
    <Container style={{
      borderBottom: isScrolled ? '1px solid #00b894' : ''
    }}>
      <InsideContainer>
        <Left>
          <div className='logo'>
            <img src='/images/logo.png' alt="Logo" />
          </div>
          <div className='name'>Auto-Insure</div>
        </Left>
        <Middle>
          <div className='insurance' onClick={takeInsuranceHandler}>
            <p>Take Insurance</p>
          </div>
        </Middle>
        <Right>
          <div className='address-div'>
            {isConnected && (
              <div className='address'>
                <p>{address}</p>
              </div>
            )}
          </div>
          <div className='button'>
            <ConnectKitButton.Custom>
              {({ isConnected, show, ensName }) => {
                setConnected(isConnected);
                return (
                  <div className="login" onClick={show}>
                    {isConnected ? ensName ?? "Logout" : "Login"}
                  </div>
                );
              }}
            </ConnectKitButton.Custom>
          </div>
        </Right>
      </InsideContainer>
      <ToastContainer autoClose={1000} hideProgressBar={true} />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center; 
  background-color: #ffffff; /* Light background for contrast */
  transition: border-bottom 0.3s ease; /* Smooth transition for border */
`;

const InsideContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  height: 100%;
  width: 15rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  .logo {
    width: 5rem;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70%; /* Adjusted width for better visibility */
    }
  }

  .name {
    flex: 1;
    margin-left: -6px;
    font-size: 26px; /* Slightly increased font size */
    font-weight: 700; /* Bolder font for emphasis */
    color: #2d3436; /* Darker text color */
  }
`;

const Middle = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px; /* Increased font size for better readability */

  .insurance {
    cursor: pointer;
    transition: color 0.3s, transform 0.3s;

    p {
      margin: 0;
      padding: 10px 15px; /* Added padding for better touch target */
      border-radius: 20px; /* Rounded corners for button effect */
      color: #00b894; /* Primary color */
      background-color: #f0f8f6; /* Subtle background for the button */
    }

    &:hover {
      color: #009b77; /* Darker shade on hover */
      transform: scale(1.05); /* Slight grow effect */
    }
  }
`;

const Right = styled.div`
  height: 100%;
  width: 19rem;
  display: flex;
  align-items: center;

  .address-div {
    height: 100%;
    flex: 1.3;
    display: flex;
    align-items: center;

    .address {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e0f2f1; /* Light background for address */
      border-radius: 20px;
      height: 1.9rem;
      cursor: pointer;
      transition: background-color 0.3s;

      p {
        font-size: 14px;
        width: 145px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #004d40; /* Darker color for text */
      }

      &:hover {
        background-color: #b2dfdb; /* Darker shade on hover */
      }
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: end;
    flex: 1;

    .login {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #00b894; /* Primary button border */
      width: 100px;
      height: 2.4rem;
      cursor: pointer;
      position: relative;
      font-size: 17px;
      font-weight: 500;
      color: #00b894; /* Primary color for text */
      border-radius: 20px;
      transition: background-color 0.25s, color 0.25s;

      &:hover {
        background-color: #00b894; /* Hover effect */
        color: white; /* Change text color on hover */
      }

      &:active {
        opacity: 0.9;
      }
    }
  }
`;
