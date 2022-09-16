import { useReducer } from 'react';

import QuizContext from '../contexts/QuizContext';
import { quizReducer, initialState } from '../reducers/quizReducer';

export default function QuizProvider({ children }: { children: JSX.Element[] }) {
    const [state, dispatch] = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
}
