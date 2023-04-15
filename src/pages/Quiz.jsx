import QuizContainer from "../components/QuizContainer/QuizContainer";
import { QuizProvider } from "../context/quizState";
import quiz from "../resources/Quizes/SolidJS/quiz.json";

function Quiz() {

    return (
        <QuizProvider>
            <QuizContainer quiz={quiz} />
        </QuizProvider>
    );
}

export default Quiz;