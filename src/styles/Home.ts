import styled from 'styled-components';

import { colors } from './Global';

export const Container = styled.section`
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        text-align: center;
        color: ${colors.primary};
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        text-align: center;
        color: ${colors.primary};
        font-weight: 500;
        margin-bottom: 2rem;
    }

    button {
        width: 50%;
        background-color: ${colors.button};
        color: ${colors.secondary};
        font-weight: 500;
        border: none;
        border-radius: 1.5rem;
        padding: 1rem 2rem;
        cursor: pointer;
        transition: 0.25s;

        &:hover {
            background-color: ${colors.primary};
        }
    }

    @media (min-width: 768px) {
        width: 50vw;
    }
`;
