import useQuiz from '../hooks/useQuiz';
import { actionsList } from '../actions/quizActions';

export default function Home() {
    const { dispatch } = useQuiz();

    return (
        <section>
            <h1>Quiz App</h1>
            <p>Test your knowledge with questions from various categories</p>
            <button onClick={() => dispatch(actionsList.showQuizForm())}>Start quiz</button>
        </section>
    );
}
