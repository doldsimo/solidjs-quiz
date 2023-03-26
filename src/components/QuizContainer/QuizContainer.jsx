
import { Button } from "@hope-ui/solid";
import { AiFillPlayCircle } from "solid-icons/ai";
import { Match, Show, Switch } from "solid-js";
import { useQuizData } from "../../context/quizState";
import ProgressBar from "./ProgressContainer/ProgressBar/ProgressBar";
import QuizStartScreen from "./QuizStartScreen/QuizStartScreen";

const QuizContainer = () => {
    const { progress, setProgress } = useQuizData();
    return (
        <div>
            <Switch>
                {/* Before Quiz is starting */}
                <Match when={progress() === 0}>
                    <QuizStartScreen />
                </Match>
                {/* Normal Quiz is starting */}
                <Match when={progress() > 0}>
                    <ProgressBar />
                </Match>
                {/* When Error of quiz process is happening (higher than 100, or lower than 0) */}
                <Match when={progress() < 0 || progress() >= 100}>
                    <Alert status="warning">
                        <AlertIcon mr="$2_5" />
                        Seems like somthing is not working correct
                    </Alert>
                </Match>
            </Switch>
        </div>
    )
}

export default QuizContainer