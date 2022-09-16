import Quiz from '../types/Quiz';
import decodeText from './decodeText';

type Response = {
    results: Data[];
};

type Data = {
    category: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

export default async function fetchQuestions(quiz: Quiz) {
    const baseURL = 'https://opentdb.com/api.php?amount=';

    const amountQuery = String(quiz.amount) !== 'any' ? quiz.amount : '';
    const categoryQuery = quiz.category !== 'any' ? `&category=${quiz.category}` : '';
    const difficultyQuery = quiz.difficulty !== 'any' ? `&difficulty=${quiz.difficulty}` : '';

    const quizURL = `${baseURL}${amountQuery}${categoryQuery}${difficultyQuery}&type=multiple`;

    const response = await fetch(quizURL);
    const data: Response = await response.json();

    const questionsList = data.results.map((question) => {
        const answerIndex = Math.floor(Math.random() * 4);

        const title = decodeText(question.question);
        const options = question.incorrect_answers.map((answer) => decodeText(answer));

        options.splice(answerIndex, 0, decodeText(question.correct_answer));

        return {
            category: question.category,
            difficulty: question.difficulty,
            title,
            options,
            answerIndex
        };
    });

    return questionsList;
}
