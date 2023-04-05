
import { Alert, Button } from "@hope-ui/solid";
import { AiFillPlayCircle } from "solid-icons/ai";
import { Match, Show, Switch } from "solid-js";
import { useQuizData } from "../../context/quizState";
import ProgressBar from "./ProgressContainer/ProgressBar/ProgressBar";
import QuizStartScreen from "./QuizStartScreen/QuizStartScreen";
import { FiAlertTriangle } from 'solid-icons/fi'
import QuizContent from "./QuizContent/QuizContent";

const QuizContainer = () => {
    const { progress } = useQuizData();
    return (
        <div>
            <Switch>
                {/* Before Quiz is starting */}
                <Match when={progress() === 0}>
                    <QuizStartScreen />
                </Match>
                {/* When Error of quiz process is happening (higher than 100, or lower than 0) */}
                <Match when={progress() < 0 || progress() >= 100}>
                    <Alert status="warning">
                        <FiAlertTriangle />
                        Seems like something is not working correct
                    </Alert>
                </Match>
                {/* Normal Quiz is starting */}
                <Match when={progress() > 0}>
                    <QuizContent />
                </Match>
            </Switch>
        </div>
    )
}

export default QuizContainer