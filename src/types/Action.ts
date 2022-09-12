import Quiz from './Quiz';
import Question from './Question';

export type Action = {
    type: string;
    payload?: {
        quizPreferences?: Quiz;
        questionsList?: Question[];
        lastAnswer?: number;
    };
};

export default Action;
