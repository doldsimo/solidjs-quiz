import { Button } from "@hope-ui/solid";
import QuizContainer from "../components/QuizContainer/QuizContainer";
import { QuizProvider } from "../context/quizState";
import { AiFillPlayCircle } from 'solid-icons/ai'
function Quiz() {
    return (
        <>
            <QuizContainer />
        </>

    );
}

export default Quiz;