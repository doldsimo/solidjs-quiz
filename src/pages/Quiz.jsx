import QuizContainer from "../components/QuizContainer/QuizContainer";
import { QuizProvider } from "../context/quizState";

function Quiz() {

    return (
        <QuizProvider>
            <h1>Quiz</h1>
            <QuizContainer />
        </QuizProvider>
    );
}

export default Quiz;