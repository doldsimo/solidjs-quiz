import { Button, Progress, ProgressIndicator, ProgressLabel } from "@hope-ui/solid"
import { useQuizData } from "../../context/quizState";

const QuizContainer = () => {
    const { progress, setProgress } = useQuizData();

    return (
        <div class="container">
            <Progress size="lg" height="3em" value={progress()} animation animated max={100}>
                <ProgressIndicator />
                <ProgressLabel />
            </Progress>

            <Button onClick={() => setProgress(progress() + 5)}>+5</Button>
            QuizContainer
        </div>
    )
}

export default QuizContainer