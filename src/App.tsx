import Home from './components/Home';
import Form from './components/Form';
import Question from './components/Question';
import Result from './components/Result';
import useQuiz from './hooks/useQuiz';
import { quizStages } from './reducers/quizReducer';

export default function App() {
    const { state } = useQuiz();

    if (state.loading) {
        return <h2>Loading questions...</h2>;
    }

    return (
        <main>
            {state.currentStage === quizStages[0] && <Home />}
            {state.currentStage === quizStages[1] && <Form />}
            {state.currentStage === quizStages[2] && <Question />}
            {state.currentStage === quizStages[3] && <Result />}
        </main>
    );
}
