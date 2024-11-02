import { React, useState } from 'react';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

function User() {
    const [formActive,] = useState(false);
    const [userHaveAccount,] = useState(false);

    return (
        <Container>
            <Main>
                {!userHaveAccount && !formActive && (
                    <div className="noAccount">
                        <div className="text">
                            <p>Congratulations! <span>You have successfully</span> Logged in!</p>
                        </div>
                    </div>
                )}
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
`;

const Main = styled.div`
    width: 100%;
    height: 99%;
    display: flex;
    justify-content: center;

    .noAccount {
        margin-top: 14rem;
        display: flex;
        flex-direction: column;
        height: 8rem;
        width: 57rem;
        justify-content: center;
        align-items: center;

        .text {
            p {
                margin: 0;
                font-size: 48px;
                letter-spacing: 3px;
                span {
                    color: #3adfae;
                }
            }
        }
    }
`;
