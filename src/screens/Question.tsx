import useQuiz from '../hooks/useQuiz';
import { actionsList } from '../actions/quizActions';
import fetchQuestions from '../functions/fetchQuestions';
import {
    Container,
    Controls,
    Info,
    QuestionContainer,
    Options,
    QuizOptions
} from '../styles/Question';

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
        <Container>
            <section>
                {state.quizOver && (
                    <Controls>
                        <button onClick={() => dispatch(actionsList.showPreviousQuestion())}>
                            Previous
                        </button>
                        {state.quizOver && (
                            <h4>
                                You got {state.score} of {state.quizPreferences.amount} questions
                                right
                            </h4>
                        )}
                        <button onClick={() => dispatch(actionsList.showNextQuestion())}>
                            Next
                        </button>
                    </Controls>
                )}
                <Info>
                    {!state.quizOver && <button onClick={quitQuiz}>Quit quiz</button>}

                    <h3>
                        Question {state.currentQuestion + 1} of {state.quizPreferences.amount}
                    </h3>
                    <p>Category: {state.questionsList[state.currentQuestion].category}</p>
                </Info>
            </section>
            <QuestionContainer>
                <h3>{state.questionsList[state.currentQuestion].title}</h3>
                <Options>
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
                </Options>
            </QuestionContainer>
            {state.quizOver && (
                <QuizOptions>
                    <button onClick={() => dispatch(actionsList.showQuizForm())}>
                        Change quiz preferences
                    </button>
                    <button onClick={restartQuiz}>Play again</button>
                </QuizOptions>
            )}
        </Container>
    );
}
