import useQuiz from '../hooks/useQuiz';
import { actionsList } from '../actions/quizActions';
import { Container } from '../styles/Home';

export default function Home() {
    const { dispatch } = useQuiz();

    return (
        <Container>
            <h1>Quiz App</h1>
            <p>Test you knowledge with questions from several categories</p>
            <button onClick={() => dispatch(actionsList.showQuizForm())}>Play now</button>
        </Container>
    );
}
