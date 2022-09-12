import Quiz from './Quiz';
import Question from './Question';

type Answer = {
    correct: number;
    user: number;
};

type State = {
    quizPreferences: Quiz;
    loading: boolean;
    quizOver: boolean;
    questionsList: Question[];
    currentQuestion: number;
    currentStage: string;
    answers: Answer[];
    score: number;
};

export default State;
