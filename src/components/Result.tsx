import useQuiz from '../hooks/useQuiz';
import fetchQuestions from '../functions/fetchQuestions';
import { actionsList } from '../actions/quizActions';

export default function Result() {
    const { state, dispatch } = useQuiz();

    const restartQuiz = async () => {
        dispatch(actionsList.setLoading());

        const questionsList = await fetchQuestions(state.quizPreferences);

        dispatch(actionsList.playAgain(questionsList));
    };

    return (
        <section>
            <h2>
                You got {state.score} of {state.quizPreferences.amount} questions right
            </h2>
            <button onClick={() => dispatch(actionsList.showQuizForm())}>
                Change quiz preferences
            </button>
            <button onClick={() => dispatch(actionsList.reviewQuestions())}>
                Review questions
            </button>
            <button onClick={restartQuiz}>Play again</button>
        </section>
    );
}
