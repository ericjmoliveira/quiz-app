import State from '../types/State';
import Action from '../types/Action';
import { ACTION_TAGS } from '../actions/quizActions';

export const quizStages = ['Form', 'Questions', 'Result'];

export const initialState = {
    quizPreferences: {
        amount: 10,
        category: 'any',
        difficulty: 'any'
    },
    loading: false,
    quizOver: false,
    questionsList: [],
    currentQuestion: 0,
    currentStage: quizStages[0],
    answers: [],
    score: 0
};

export const quizReducer = (state: State, action: Action): State => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_TAGS.SHOW_QUIZ_FORM:
            return {
                ...state,
                questionsList: [],
                currentQuestion: 0,
                currentStage: quizStages[0],
                score: 0
            };
        case ACTION_TAGS.SET_LOADING:
            return {
                ...state,
                loading: true,
                quizOver: false
            };
        case ACTION_TAGS.START_QUIZ:
            return {
                ...state,
                quizPreferences: payload?.quizPreferences!,
                loading: false,
                questionsList: payload?.questionsList!,
                currentQuestion: 0,
                currentStage: quizStages[1],
                answers: [],
                score: 0
            };
        case ACTION_TAGS.QUIT_QUIZ:
            return {
                ...state,
                questionsList: [],
                currentQuestion: 0,
                currentStage: quizStages[0],
                answers: [],
                score: 0
            };
        case ACTION_TAGS.SEND_ANSWER:
            return {
                ...state,
                score:
                    state.questionsList[state.currentQuestion].options![payload?.lastAnswer!] ===
                    state.questionsList[state.currentQuestion].correctAnswer
                        ? state.score + 1
                        : state.score,
                quizOver: state.currentQuestion === state.quizPreferences.amount - 1 ? true : false,
                currentQuestion: state.currentQuestion + 1,
                currentStage:
                    state.currentQuestion === state.quizPreferences.amount - 1
                        ? quizStages[2]
                        : quizStages[1],
                answers: [
                    ...state.answers,
                    {
                        correct: state.questionsList[state.currentQuestion].options.indexOf(
                            state.questionsList[state.currentQuestion].correctAnswer
                        ),
                        user: payload?.lastAnswer!
                    }
                ]
            };
        case ACTION_TAGS.REVIEW_QUESTIONS:
            return {
                ...state,
                currentQuestion: 0,
                currentStage: quizStages[1]
            };
        case ACTION_TAGS.SHOW_PREVIOUS_QUESTION:
            return {
                ...state,
                currentQuestion:
                    state.currentQuestion === 0
                        ? state.quizPreferences.amount - 1
                        : state.currentQuestion - 1
            };
        case ACTION_TAGS.SHOW_NEXT_QUESTION:
            return {
                ...state,
                currentQuestion:
                    state.currentQuestion === state.quizPreferences.amount - 1
                        ? 0
                        : state.currentQuestion + 1
            };
        case ACTION_TAGS.PLAY_AGAIN:
            return {
                ...state,
                loading: false,
                questionsList: payload?.questionsList!,
                currentQuestion: 0,
                currentStage: quizStages[1],
                answers: [],
                score: 0
            };
        default:
            return state;
    }
};
