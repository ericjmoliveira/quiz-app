import useQuiz from '../hooks/useQuiz';
import fetchQuestions from '../functions/fetchQuestions';
import { actionsList } from '../actions/quizActions';
import { Container, QuizOptions } from '../styles/Result';

export default function Result() {
    const { state, dispatch } = useQuiz();

    const restartQuiz = async () => {
        dispatch(actionsList.setLoading());

        const questionsList = await fetchQuestions(state.quizPreferences);

        dispatch(actionsList.playAgain(questionsList));
    };

    return (
        <Container>
            <h2>
                {state.score === 0
                    ? 'You got none of the questions right...'
                    : state.score === state.quizPreferences.amount
                    ? 'You got all questions right, congratulations!'
                    : `You got ${state.score} of ${state.quizPreferences.amount} questions right`}
            </h2>
            <QuizOptions>
                <button onClick={() => dispatch(actionsList.reviewQuestions())}>
                    Review the questions
                </button>
                <button onClick={() => dispatch(actionsList.showQuizForm())}>
                    Change quiz preferences
                </button>
                <button onClick={restartQuiz}>Play again</button>
            </QuizOptions>
        </Container>
    );
}
