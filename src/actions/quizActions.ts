import Action from '../types/Action';
import Quiz from '../types/Quiz';
import Question from '../types/Question';

export const ACTION_TAGS = {
    SHOW_QUIZ_FORM: 'SHOW_QUIZ_FORM',
    SET_LOADING: 'SET_LOADING',
    START_QUIZ: 'START_QUIZ',
    QUIT_QUIZ: 'QUIT_QUIZ',
    SEND_ANSWER: 'SEND_ANSWER',
    REVIEW_QUESTIONS: 'REVIEW_QUESTIONS',
    SHOW_PREVIOUS_QUESTION: 'SHOW_PREVIOUS_QUESTION',
    SHOW_NEXT_QUESTION: 'SHOW_NEXT_QUESTION',
    PLAY_AGAIN: 'PLAY_AGAIN'
};

export const actionsList = {
    showQuizForm: (): Action => {
        return {
            type: ACTION_TAGS.SHOW_QUIZ_FORM
        };
    },

    setLoading: (): Action => {
        return {
            type: ACTION_TAGS.SET_LOADING
        };
    },

    startQuiz: (quizPreferences: Quiz, questionsList: Question[]): Action => {
        return {
            type: ACTION_TAGS.START_QUIZ,
            payload: {
                quizPreferences,
                questionsList
            }
        };
    },

    quitQuiz: (): Action => {
        return {
            type: ACTION_TAGS.QUIT_QUIZ
        };
    },

    sendAnswer: (lastAnswer: number): Action => {
        return {
            type: ACTION_TAGS.SEND_ANSWER,
            payload: {
                lastAnswer
            }
        };
    },

    reviewQuestions: (): Action => {
        return {
            type: ACTION_TAGS.REVIEW_QUESTIONS
        };
    },

    showPreviousQuestion: (): Action => {
        return {
            type: ACTION_TAGS.SHOW_PREVIOUS_QUESTION
        };
    },

    showNextQuestion: (): Action => {
        return {
            type: ACTION_TAGS.SHOW_NEXT_QUESTION
        };
    },

    playAgain: (questionsList: Question[]): Action => {
        return {
            type: ACTION_TAGS.PLAY_AGAIN,
            payload: {
                questionsList
            }
        };
    }
};
