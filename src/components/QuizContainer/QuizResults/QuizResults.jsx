import { Button } from "@hope-ui/solid"
import { useQuizData } from "../../../context/quizState";

const QuizResults = () => {
    const { setCurrentPage, setCurrentQuestion, setQuiz } = useQuizData();

    const cleanQuiz = () => {
        setCurrentPage(0);
        setCurrentQuestion({});
        // setQuiz({});
    }

    return (
        <div>
            <p>
                QuizResults
            </p>

            <Button onClick={() => cleanQuiz()}>Back to start the Quiz again</Button>

        </div>
    )
}

export default QuizResults