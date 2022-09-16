import useQuiz from '../hooks/useQuiz';
import { actionsList } from '../actions/quizActions';
import fetchQuestions from '../functions/fetchQuestions';

export default function Question() {
    const { state, dispatch } = useQuiz();

    const quitQuiz = () => {
        const response = confirm('Are you sure you want to quit the quiz?');

        if (response) dispatch(actionsList.quitQuiz());
    };

    const restartQuiz = async () => {
        dispatch(actionsList.setLoading());

        const questionsList = await fetchQuestions(state.quizPreferences);

        dispatch(actionsList.playAgain(questionsList));
    };

    const showNextQuestion = (index: number) => {
        setTimeout(() => dispatch(actionsList.sendAnswer(index)), 250);
    };

    return (
        <section>
            <section>
                {state.quizOver && (
                    <section>
                        <button onClick={() => dispatch(actionsList.showPreviousQuestion())}>
                            Previous
                        </button>
                        <button onClick={() => dispatch(actionsList.showNextQuestion())}>
                            Next
                        </button>
                        <h4>
                            You got {state.score} of {state.quizPreferences.amount} questions right
                        </h4>
                    </section>
                )}
                <div>{!state.quizOver && <button onClick={quitQuiz}>Quit quiz</button>}</div>
                <div>
                    <h3>
                        Question {state.currentQuestion + 1} of {state.quizPreferences.amount}
                    </h3>
                    <p>Category: {state.questionsList[state.currentQuestion].category}</p>
                </div>
            </section>
            <div>
                <h3>{state.questionsList[state.currentQuestion].title}</h3>
                <div>
                    <button onClick={() => showNextQuestion(0)} disabled={state.quizOver}>
                        {state.questionsList[state.currentQuestion].options[0]}
                    </button>
                    <button onClick={() => showNextQuestion(1)} disabled={state.quizOver}>
                        {state.questionsList[state.currentQuestion].options[1]}
                    </button>
                    <button onClick={() => showNextQuestion(2)} disabled={state.quizOver}>
                        {state.questionsList[state.currentQuestion].options[2]}
                    </button>
                    <button onClick={() => showNextQuestion(3)} disabled={state.quizOver}>
                        {state.questionsList[state.currentQuestion].options[3]}
                    </button>
                </div>
            </div>
            {state.quizOver && (
                <div>
                    <button onClick={() => dispatch(actionsList.showQuizForm())}>
                        Change quiz preferences
                    </button>
                    <button onClick={restartQuiz}>Play again</button>
                </div>
            )}
        </section>
    );
}
