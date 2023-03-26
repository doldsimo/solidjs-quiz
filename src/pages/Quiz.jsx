import QuizContainer from "../components/QuizContainer/QuizContainer";
import { QuizProvider } from "../context/quizState";

function Quiz() {

    return (
        <>
            <h1>Quiz</h1>
            <QuizContainer />
        </>
        
    );
}

export default Quiz;