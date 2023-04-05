import { Show } from "solid-js";
import { useQuizData } from "../../../context/quizState";
import QuizNavigationButton from "../QuizNavigationButton/QuizNavigationButton";


const QuizFooter = () => {
    const { progress, questionsSum, allowBackjumping, setCurrentPage, currentPage } = useQuizData();
    return (
        <div style={{ "display": "flex", "justify-content": "space-between" }}>
            <Show
                when={currentPage() > 1 && allowBackjumping()}
                fallback={<div />}
            >
                <QuizNavigationButton onClick={() => setCurrentPage(currentPage() - 1)}>Back</QuizNavigationButton>
            </Show>
            <Show
                when={currentPage() === questionsSum()}
                fallback={<QuizNavigationButton onClick={() => setCurrentPage(currentPage() + 1)}>Next</QuizNavigationButton>}
            >
                <QuizNavigationButton color="$success11" onClick={() => setCurrentPage(currentPage() + 1)}>Finish</QuizNavigationButton>
            </Show>
        </div>
    )
}

export default QuizFooter;