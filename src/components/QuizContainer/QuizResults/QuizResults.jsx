import { Button } from "@hope-ui/solid"
import { useQuizData } from "../../../context/quizState";

const QuizResults = () => {
    const { setCurrentPage } = useQuizData();
    return (
        <div>
            <p>
                QuizResults
            </p>

            <Button onClick={() => setCurrentPage(-1)}>Back to start the Quiz again</Button>

        </div>
    )
}

export default QuizResults