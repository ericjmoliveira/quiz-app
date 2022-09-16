import { FormEvent, useState } from 'react';

import useQuiz from '../hooks/useQuiz';
import { actionsList } from '../actions/quizActions';
import fetchQuestions from '../functions/fetchQuestions';

export default function Form() {
    const { state, dispatch } = useQuiz();

    const [amount, setAmount] = useState(state.quizPreferences.amount);
    const [category, setCategory] = useState(state.quizPreferences.category);
    const [difficulty, setDifficulty] = useState(state.quizPreferences.difficulty);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        dispatch(actionsList.setLoading());

        const quizPreferences = { amount, category, difficulty };
        const questionsList = await fetchQuestions(quizPreferences);

        dispatch(actionsList.startQuiz(quizPreferences, questionsList));
    };

    return (
        <section>
            <h2>Set the quiz preferences</h2>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="amount">Number of Questions:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        min="1"
                        max="50"
                        required
                    />
                </section>
                <section>
                    <label htmlFor="category">Select Category:</label>
                    <select
                        id="category"
                        defaultValue={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="any">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                    </select>
                </section>
                <section>
                    <label htmlFor="difficulty">Select Difficulty:</label>
                    <select
                        id="difficulty"
                        defaultValue={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        required
                    >
                        <option value="any">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </section>
                <button>Start quiz</button>
            </form>
        </section>
    );
}
