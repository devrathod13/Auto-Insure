import React from 'react';
import styled from 'styled-components';

function Hero() {
    const getStartedHandler = () => {
        window.scroll({
            top: 926,
            behavior: 'smooth'
        });
    }

    return (
        <Container>
            <Text>
                <div className='main-text'>
                    <p>Peer-to-Peer <span>Blockchain-Based</span> Car Insurance</p>
                </div>
                <div className='buttons'>
                    <div className='plan-pricing' onClick={getStartedHandler}>
                        <p>Get Started</p>
                        <div className='for-arrow'>
                            <img src="/images/long-white.png" alt="Arrow" />
                        </div>
                    </div>
                </div>
            </Text>
            <Image>
                <div className='bgImg'>
                    <img src='/images/Vector.png' alt="Background" />
                </div>
                <div className='car'>
                    <img src='/images/sports-car.png' alt="Car" />
                </div>
                <div className='shield'>
                    <img src="/images/shield-check.png" alt="Shield" />
                </div>
            </Image>
            <div className='bar'></div>
        </Container>
    );
}

export default Hero;

const Container = styled.div`
    position: relative;
    margin-top: 5rem;
    height: 90vh;
    width: 100%;
    padding-left: 13.2rem;
    display: flex;
    background-color: #f7f9fc; /* Light background for contrast */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
    border-radius: 10px; /* Rounded corners */

    .bar {
        position: absolute;
        top: 55rem;
        left: 44.4%;
        right: 50%;
        height: 3px;
        border-radius: 5px;
        width: 60px;
        background-color: #00b894; /* Color for the bar */
    }
`;

const Text = styled.div`
    width: 35rem;
    display: flex;
    flex-direction: column;

    .main-text {
        flex: 1.4;
        display: flex;
        align-items: end;

        p {
            margin: 0;
            font-size: 65px;
            font-weight: 600; /* Increased font weight */
            margin-bottom: 10px;
            letter-spacing: 3px;
            color: #2d3436; /* Darker text color for readability */

            span {
                color: #00b894; /* Highlighted text color */
            }
        }
    }

    .buttons {
        flex: 1;
        display: flex;
        justify-content: start;

        .plan-pricing {
            cursor: pointer;
            margin-top: 3rem;
            width: 12.2rem;
            height: 3rem;
            background-color: #00b894; /* Primary button color */
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100px;
            color: white;
            font-size: 20px;
            transition: all 0.3s;

            &:hover {
                background-color: #009b77; /* Darker shade on hover */
                transform: translateY(-2px); /* Slight lift effect */
            }

            &:active {
                opacity: 0.8;
                transform: translateY(1px); /* Press effect */
            }

            .for-arrow {
                width: 50px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    margin-top: 1px;
                    width: 100%;
                    margin-left: 15px;
                }
            }
        }
    }
`;

const Image = styled.div`
    flex: 1;
    position: relative;

    .bgImg {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        padding-left: 19rem;

        img {
            margin-top: -9rem;
            width: 71%;
        }
    }

    .car {
        position: absolute;
        top: 4rem;
        right: 10rem;
        display: flex;
        justify-content: center;

        img {
            margin-left: -5rem;
            width: 100%;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for the car */
        }
    }

    .shield {
        position: absolute;
        top: 7.2rem;
        left: 31em;
        z-index: 9;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 34%;
            transition: transform 0.3s; /* Smooth transition */
        }

        &:hover img {
            transform: scale(1.1); /* Slight scale on hover */
        }
    }
`;
