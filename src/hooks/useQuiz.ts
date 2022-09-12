import { useContext } from 'react';

import QuizContext from '../contexts/QuizContext';

export default function useQuiz() {
    return useContext(QuizContext);
}
