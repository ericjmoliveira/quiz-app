import styled from 'styled-components';

import { colors } from './Global';

export const Container = styled.section`
    width: 90vw;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 50vw;
    }
`;

export const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    h4 {
        text-align: center;
        color: ${colors.primary};
    }

    button {
        background-color: ${colors.button};
        color: ${colors.secondary};
        font-weight: 500;
        border: none;
        border-radius: 1.5rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: 0.25s;

        &:hover {
            background-color: ${colors.primary};
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    button {
        align-self: flex-start;
        background-color: ${colors.button};
        color: ${colors.secondary};
        font-weight: 500;
        border: none;
        border-radius: 1.5rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        margin-bottom: 1rem;
        transition: 0.25s;

        &:hover {
            background-color: ${colors.primary};
        }
    }

    h3 {
        text-align: center;
        color: ${colors.primary};
        margin-bottom: 1rem;
    }

    p {
        text-align: center;
        color: ${colors.primary};
        font-weight: 500;
        margin-bottom: 1rem;
    }
`;

export const Question = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: ${colors.primary};
        height: 50px;
        margin-top: 1rem;
    }
`;

export const Options = styled.div`
    align-self: center;
    justify-content: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem 0;
    margin-top: 2rem;
`;

type OptionProps = {
    quizOver: boolean;
    optionColor: string | undefined;
};

export const Option = styled.button<OptionProps>`
    height: 50px;
    background-color: inherit;
    color: ${colors.primary};
    font-weight: 700;
    border: 2px solid ${colors.primary};
    border-radius: 2.5rem;
    padding: 1rem 2rem;
    cursor: pointer;

    &:active {
        background-color: ${({ quizOver }) => (!quizOver ? colors.button : '')};
        color: ${colors.secondary};
    }

    &:disabled {
        background-color: ${({ optionColor }) => optionColor};
        color: ${colors.secondary};
        border: none;
        cursor: auto;
    }
`;

export const QuizOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;

    button {
        align-self: flex-start;
        background-color: ${colors.button};
        color: ${colors.secondary};
        font-weight: 500;
        border: none;
        border-radius: 1.5rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: 0.25s;

        &:hover {
            background-color: ${colors.primary};
        }
    }
`;
