import { React } from 'react';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  return (
    <Container>
      <Brand>
        <p className="my-pinsurance">Auto-Insure</p>
      </Brand>
      <Contributors>
        <Contributor>
          <div className="image-div">
            <div className="profile-pic-div">
              <img src="/images/profile-pic1.png" alt="Profile" />
            </div>
          </div>
          <div className="name-div">
            <p></p>
          </div>
          <div className="social-handle-div">
            <a href="#" className="handles">
              <img src="/images/github.png" alt="GitHub.com" />
            </a>
            <a href="#" className="handles">
              <img src="/images/linkedin.png" alt="LinkedIn.com" />
            </a>
          </div>
        </Contributor>
        {/* Add more Contributor components as needed */}
      </Contributors>
      <SourceCode>
        <p>Source Code</p>
        <div>
          <img src="/images/github-icon.png" alt="GitHub" a = ""/>
        </div>
      </SourceCode>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  position: relative;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  background: linear-gradient(180deg, rgba(10, 10, 13, 0.95) 0%, rgba(10, 10, 13, 0.8) 100%);
  border-top: 1px solid rgba(130, 71, 230, 0.4);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Brand = styled.div`
  margin-bottom: 20px;

  .my-pinsurance {
    font-size: 48px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Contributors = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;
`;

const Contributor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);

  .image-div {
    height: 110px;
    width: 110px;
    border-radius: 70px;
    overflow: hidden;
    border: 2px solid #3adfae;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  .name-div {
    font-size: 16px;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
    color: rgba(255, 255, 255, 0.9);
  }

  .social-handle-div {
    display: flex;
    justify-content: center;

    .handles {
      margin: 0 10px;
      width: 30px;
      height: 30px;
      transition: transform 0.25s;

      img {
        width: 100%;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const SourceCode = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: white;

  p {
    margin-right: 10px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
  }

  img {
    width: 25px;
    transition: transform 0.25s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
