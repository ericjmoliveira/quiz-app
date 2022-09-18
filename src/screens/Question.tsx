import useQuiz from '../hooks/useQuiz';
import { actionsList } from '../actions/quizActions';
import fetchQuestions from '../functions/fetchQuestions';
import * as Styles from '../styles/Question';
import { colors } from '../styles/Global';

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

    const getOptionColor = (index: number) => {
        const correct = index === state.answers[state.currentQuestion].correct;
        const incorrect =
            index !== state.answers[state.currentQuestion].correct &&
            index === state.answers[state.currentQuestion].player;
        const notSelected =
            index !== state.answers[state.currentQuestion].correct ||
            index !== state.answers[state.currentQuestion].player;

        if (correct) return colors.correct;
        if (incorrect) return colors.incorrect;
        if (notSelected) return colors.primary;
    };

    return (
        <Styles.Container>
            <section>
                {state.quizOver && (
                    <Styles.Controls>
                        <button onClick={() => dispatch(actionsList.showPreviousQuestion())}>
                            Previous
                        </button>
                        {state.quizOver && (
                            <h4>
                                {state.score === 0
                                    ? 'You got none of the questions right...'
                                    : state.score === state.quizPreferences.amount
                                    ? 'You got all questions right, congratulations!'
                                    : `You got ${state.score} of ${state.quizPreferences.amount} questions right`}
                            </h4>
                        )}
                        <button onClick={() => dispatch(actionsList.showNextQuestion())}>
                            Next
                        </button>
                    </Styles.Controls>
                )}
                <Styles.Info>
                    {!state.quizOver && <button onClick={quitQuiz}>Quit quiz</button>}

                    <h3>
                        Question {state.currentQuestion + 1} of {state.quizPreferences.amount}
                    </h3>
                    <p>Category: {state.questionsList[state.currentQuestion].category}</p>
                </Styles.Info>
            </section>
            <Styles.Question>
                <h3>{state.questionsList[state.currentQuestion].title}</h3>
                <Styles.Options>
                    <Styles.Option
                        onClick={() => showNextQuestion(0)}
                        quizOver={state.quizOver}
                        optionColor={getOptionColor(0)}
                        disabled={state.quizOver}
                    >
                        {state.questionsList[state.currentQuestion].options[0]}
                    </Styles.Option>
                    <Styles.Option
                        onClick={() => showNextQuestion(1)}
                        quizOver={state.quizOver}
                        optionColor={getOptionColor(1)}
                        disabled={state.quizOver}
                    >
                        {state.questionsList[state.currentQuestion].options[1]}
                    </Styles.Option>
                    <Styles.Option
                        onClick={() => showNextQuestion(2)}
                        quizOver={state.quizOver}
                        optionColor={getOptionColor(2)}
                        disabled={state.quizOver}
                    >
                        {state.questionsList[state.currentQuestion].options[2]}
                    </Styles.Option>
                    <Styles.Option
                        onClick={() => showNextQuestion(3)}
                        quizOver={state.quizOver}
                        optionColor={getOptionColor(3)}
                        disabled={state.quizOver}
                    >
                        {state.questionsList[state.currentQuestion].options[3]}
                    </Styles.Option>
                </Styles.Options>
            </Styles.Question>
            {state.quizOver && (
                <Styles.QuizOptions>
                    <button onClick={() => dispatch(actionsList.showQuizForm())}>
                        Change quiz preferences
                    </button>
                    <button onClick={restartQuiz}>Play again</button>
                </Styles.QuizOptions>
            )}
        </Styles.Container>
    );
}
