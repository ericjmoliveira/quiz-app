import { createContext } from 'react';

import State from '../types/State';
import Action from '../types/Action';

interface QuizInterface {
    state: State;
    dispatch: React.Dispatch<Action>;
}

const QuizContext = createContext<QuizInterface>(null!);

export default QuizContext;
