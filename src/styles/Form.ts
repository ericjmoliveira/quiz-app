import styled from 'styled-components';

import { colors } from './Global';

export const Container = styled.section`
    width: 90vw;

    h2 {
        text-align: center;
        color: ${colors.primary};
        margin-bottom: 2.5rem;
    }

    form {
        display: flex;
        flex-direction: column;

        button {
            width: 50%;
            align-self: center;
            background-color: ${colors.button};
            color: ${colors.secondary};
            font-weight: 500;
            border: none;
            border-radius: 1.5rem;
            margin-top: 3.5rem;
            padding: 1rem 2rem;
            cursor: pointer;
            transition: 0.25s;

            &:hover {
                background-color: ${colors.primary};
            }
        }
    }

    @media (min-width: 768px) {
        width: 50vw;
    }
`;

export const FormControl = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
        color: ${colors.primary};
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    input,
    select,
    option {
        color: ${colors.primary};
        font-weight: 500;
        border: 1px solid ${colors.primary};
        padding: 0.5rem 1rem;

        &:focus {
            outline: none;
        }
    }
`;
