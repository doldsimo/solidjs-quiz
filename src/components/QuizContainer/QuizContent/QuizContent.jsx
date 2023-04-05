import { Container } from "@hope-ui/solid"
import ProgressBar from "../ProgressBar/ProgressBar"
import QuizNavigationButton from "../QuizNavigationButton/QuizNavigationButton"
import { Show } from "solid-js"
import { useQuizData } from "../../../context/quizState"
import QuizHeader from "../QuizHeader/QuizHeader"
import QuizQuestion from "../QuizQuestion/QuizQuestion"


const QuizContent = () => {
    const { progress, questionsSum, allowBackjumping, setCurrentPage, currentPage } = useQuizData();
    return (
        <>
            <br />
            <ProgressBar />
            <Container>
                <QuizHeader />
                <QuizQuestion/>
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
            </Container>
        </>
    )
}


export default QuizContent