import { Container } from "@hope-ui/solid"
import ProgressBar from "../ProgressContainer/ProgressBar/ProgressBar"
import QuizNavigationButton from "../ProgressContainer/QuizNavigationButton/QuizNavigationButton"
import { Show } from "solid-js"
import { useQuizData } from "../../../context/quizState"


const QuizContent = () => {
    const { progress, setProgress, allowBackjumping } = useQuizData();
    return (
        <>
            <br />
            <ProgressBar />
            <Container>
                <div>
                    Content
                </div>
                <div style={{ "display": "flex", "justify-content": "space-between" }}>
                    <Show
                        when={progress() > 1 && allowBackjumping()}
                        fallback={<div/>}
                    >
                        <QuizNavigationButton onClick={() => setProgress(progress() - 5)}>Back</QuizNavigationButton>
                    </Show>
                    <QuizNavigationButton onClick={() => setProgress(progress() + 5)}>Next</QuizNavigationButton>
                </div>
            </Container>
        </>
    )
}


export default QuizContent