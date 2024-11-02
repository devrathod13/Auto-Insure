import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';

function Claim() {
  return (
    <Container>
      <div className='left'>
        <div className='main-container'>
          <div className='heading'>
            <p>Request for Claim</p>
          </div>
          <div className='pool-address'>
            <input type="text" placeholder='Pool Address' onChange={(props) => {
              let pool = props.target.value
              setPoolAddress(pool)
            }} />
          </div>
          <div className="upload-amount">
            <div className='amount-div'>
              <input type="text" placeholder='Claim amount' onChange={(props) => {
                let x = props.target.value;
                setAmount(x);
              }} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Claim

const Container = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding-top: 1rem;

    .left {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;

      .main-container {
        margin-top: 6rem;
        height: 70%;
        width: 70%;
        background-color: #0152b515;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        border-radius: 8px;

        .heading {
          width: 99%;
          height: 2.3rem;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            margin: 0;
            margin-top: 10px;
            color: #0a458d;
          }
        }

        .pool-address {
          margin-top: 1.5rem;
          height: 2.4rem;
          width: 93%;
          display: flex;
          justify-content: center;
          align-items: center;
          
          input {
            width: 100%;
            height: 2rem;
            outline: none;
            border-radius: 6px;
            border: 1px solid #0152b565;

            padding-left: 10px;
            font-size: 15px;
          }
        }

        .upload-amount {
          height: 2.5rem;
          width: 92%;
          margin-top: 1.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;

          .amount-div {
            flex: 1;
            height: 100%;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-content: center;
            overflow: hidden;

            input {
              width: 100%;
              height: 90%;
              outline: none;
              border-radius: 6px;
              border: 1px solid #0152b565;

              padding-left: 10px;
              font-size: 15px;
            }
          }

          .upload-div {
            flex: 1;
            height: 100%;
            background-color:  #181717;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.15s;

            input {
              width: 80%;
              color: white;
              background-color: #e3dddd2d;
              border-radius: 2px;
              cursor: pointer;
            }

            p {
              margin:0;
              font-size: 12px;
              color: white;
            }
          }

        }

        .button {
          margin-top: 1.2rem;
          height: 2.5rem;
          width: 92%;
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #0153b5;
          transition: opacity 0.15s;
            cursor: pointer;

            &:hover {
              opacity: 0.9;
            }

            &:active {
              opacity: 0.8;
            }
          p {
            color: white;
            font-size: 15px;
          }
        }
      }
    }

    .right {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;

      .main-container {
        margin-top: 6rem;
        height: 70%;
        width: 70%;
        background-color: #0152b515;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        border-radius: 8px;

        .heading {
          width: 99%;
          height: 2.3rem;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            margin: 0;
            margin-top: 10px;
            color: #0a458d;
          }
        }

        .claims-container {
          margin-top: 15px;
          height: 100%;
          width: 88%;
          overflow: scroll;
          padding-top: 10px;
        }

        .placeholder {
          margin-top: 15px;
          height: 100%;
          width: 88%;
          display: flex;
          justify-content: center;
          align-items: start;

          p {
            margin: 0;
            margin-top: 3rem;
          }
        }

      }
    }
`