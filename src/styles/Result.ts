import styled from 'styled-components';
import { colors } from './Global';

export const Container = styled.section`
    width: 90vw;

    h2 {
        text-align: center;
        font-size: 1.8rem;
        margin-bottom: 4rem;
    }

    @media (min-width: 768px) {
        width: 50vw;
    }
`;

export const QuizOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    button {
        width: 75%;
        background-color: ${colors.button};
        color: ${colors.secondary};
        font-weight: 500;
        border: none;
        border-radius: 1.5rem;
        padding: 1rem 2rem;
        cursor: pointer;
        margin-bottom: 2rem;
        transition: 0.25s;

        &:hover {
            background-color: ${colors.primary};
        }
    }
`;
