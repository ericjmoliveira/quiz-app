import Home from './screens/Home';
import Form from './screens/Form';
import Question from './screens/Question';
import Result from './screens/Result';
import useQuiz from './hooks/useQuiz';
import { quizStages } from './reducers/quizReducer';
import { Container } from './styles/App';

export default function App() {
    const { state } = useQuiz();

    return (
        <Container>
            {state.loading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    {state.currentStage === quizStages[0] && <Home />}
                    {state.currentStage === quizStages[1] && <Form />}
                    {state.currentStage === quizStages[2] && <Question />}
                    {state.currentStage === quizStages[3] && <Result />}
                </>
            )}
        </Container>
    );
}
